import { NextRequest, NextResponse } from 'next/server'; 
import { getResponse } from '../openai';

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const {prompt} = await req.json();
        const message:string = await getResponse(prompt) || "API Down...";
        return NextResponse.json({ message:message }, { status: 200 })
    } catch (err) {
        console.log("can't post: ", err);
        return NextResponse.json({ error: `Internal Server Error: ${err}` }, { status: 500 })
    }
}

export const config = {
    api: {
      bodyParser: true,
    },
}