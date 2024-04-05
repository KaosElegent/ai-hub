import { NextRequest, NextResponse } from 'next/server'; 

/*
export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const urlParams = new URLSearchParams(req.url.split('?')[1])
        const email = urlParams.get('email')
        console.log(email);

        const user = await User.find({email:email}).exec();
        const lease_ids = user[0].leaseIDs;
        console.log(user[0]);

        let leases = [];
        for(let id of lease_ids){
            const aLease = await Lease.find({ _id: id}).exec();
            leases.push(aLease[0]);
        }
        //const leases = await Lease.find({ _id: { $in: user.leaseIDs } }).exec();
        console.log("Leases: ",leases);

        return NextResponse.json(leases, { status: 200 });
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
*/


export async function POST(req: NextRequest, res: NextResponse) {
    try { 
        return NextResponse.json({ message:"Yo how's it going" }, { status: 200 })
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