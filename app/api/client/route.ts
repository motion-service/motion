import {NextRequest, NextResponse} from "next/server";
import {cookies} from "next/headers";


export async function GET(req: NextRequest) {
    let cookieStore = cookies();
    let uuid = cookieStore.get("motion-user");

    return NextResponse.json({"uuid": uuid});
}

export async function POST(req: NextRequest, res: NextResponse) {
    const data = await req.json();
    let cookieStore = cookies();

    cookieStore.set("client", data.uuid);
    return NextResponse.json({});
}
