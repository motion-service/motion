import {NextRequest, NextResponse} from "next/server";
import {cookies} from "next/headers";


export async function GET(req: NextRequest) {
    let store = cookies();

    let url = req.nextUrl.searchParams.get("link");

    if (url !== null){
        store.set("url", url);
    }

    return NextResponse.json({});
}