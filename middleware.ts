import {NextResponse, type NextRequest} from 'next/server';
import {cookies} from "next/headers";

import path from "./path.json";


export default function middleware(req: NextRequest) {
    const cookieStore = cookies()

    let user = cookieStore.get("user");
    let link = cookieStore.get("link");

    if (user !== undefined && link !== undefined) {
        if (req.nextUrl.pathname !== `/${link.value}`) {

        }

        if (req.nextUrl.pathname !== `/${user.value}`) {
            return NextResponse.redirect(new URL(`/${user.value}`, req.url));
        }
    } else {

    }
}
export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)'
    ],
}