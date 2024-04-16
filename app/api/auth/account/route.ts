import {NextRequest, NextResponse} from "next/server";
import {cookies} from "next/headers";


export async function GET(req: NextRequest) {
    let user = cookies().get("user");

    if (user !== undefined) {
        return NextResponse.json({"user": user.value});
    }

    return NextResponse.json({});
}