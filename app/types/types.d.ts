import {ObjectId} from "bson";

type MotionAccount = {
    nickname: string;
    password?: string;
    name?: string;
    email?: string;
    image?: string;
}

interface MotionUser {
    _id?: ObjectId;
    account: MotionAccount;
    ip: string;
    date: string;
}

type LoginStatus = "authenticated" | "loading" | "unauthenticated"

type RegisterStatus = "default" | "already_existed_id" | "success";

type JobType = "undefined" | "Programmer" | "Graphic_Designer" | "Student" | "Teacher" | "None"