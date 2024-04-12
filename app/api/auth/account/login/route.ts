import {NextRequest, NextResponse} from 'next/server';
import {cookies} from "next/headers";
import clientPromise from "@/app/lib/mongodb";
import {LoginStatus, MotionUser} from "@/app/types/types";
import {ObjectId} from "bson";

export async function GET(req: NextRequest) {
    let user = cookies().get("user");
    if (user !== undefined) {

        let client = await clientPromise;
        let db = client.db("Motion");

        let user_collection = db.collection("user");
        let users: MotionUser[] = await user_collection.find<MotionUser>({_id: new ObjectId(user.value)}, {}).toArray();

        let new_user = undefined;

        users.forEach((user) => {
            if (user.account.password != undefined && user.account.nickname != undefined) {
                new_user = user;
            }
        });

        return NextResponse.json({user: new_user});
    }

    return NextResponse.json({});
}

export async function POST(req: NextRequest, res: NextResponse) {
    const data = await req.json();

    let client = await clientPromise;
    let db = client.db("Motion");

    let user_collection = db.collection("user");
    let users: MotionUser[] = await user_collection.find<MotionUser>({}, {}).toArray();

    let loginStatus: LoginStatus = "unauthenticated";
    let id: string = "";

    if (process.env.MODE === "DEV") {
        users.forEach((user) => {
            if (user.account.password != undefined && user.account.nickname != undefined) {
                let account = user.account;
                let name = account.nickname;
                let password = account.password;

                if (data.nickname === name && data.password === password) {
                    let cookie_store = cookies();
                    let objectId = user._id;

                    if (objectId !== undefined) {
                        id = objectId.toString();
                        cookie_store.set("user", objectId.toString())
                        loginStatus = "authenticated";

                    }
                }
            }
        })
    } else {
        users.forEach((user) => {
            let account = user.account;
            let name = account.name;

        })
    }

    return NextResponse.json({loginStatus: loginStatus, id: id});
}