import { NextRequest, NextResponse } from 'next/server'; 
import { getResponse } from '../gemini';
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';
import { checkAuth } from '../userAuth';
import { UserProfile } from '@auth0/nextjs-auth0/client';

export const POST = withApiAuthRequired( async function gptAPI(req: NextRequest) {
    const res = new NextResponse();
    
    const session:any = await getSession(req,res);

    if(session){
        const user:UserProfile = session.user;
        if(user && ! await checkAuth(user.email || "")){
            console.log(`Unauthorized Access Attempt by [${user.email}]`);
            return NextResponse.json({ message: "User not authorized (Contact devs to be added to beta testers)" }, { status: 200 })
        }
        try {
            const {prompt} = await req.json();
            const message:string = await getResponse(prompt) || "API Down...";
            return NextResponse.json({ message:message }, { status: 200 })
        } catch (err) {
            console.log("can't post: ", err);
            return NextResponse.json({ error: `Internal Server Error: ${err}` }, { status: 500 })
        }
    }
    return NextResponse.json({ error: `No session found.` }, { status: 401 })
});