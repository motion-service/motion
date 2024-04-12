import {NextResponse, type NextRequest} from 'next/server';
import {cookies} from "next/headers";

import path from "./path.json";


export default function middleware(req: NextRequest) {
    const cookieStore = cookies()

    let user = cookieStore.get("user");

    if (user !== undefined) {
        if (req.nextUrl.pathname !== `/${user.value}`) {
            return NextResponse.redirect(new URL(`/${user.value}`, req.url));
        }
    } else {
        console.log("test")
    }
}
export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)'
    ],
}