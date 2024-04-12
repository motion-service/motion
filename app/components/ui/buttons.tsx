"use client"
import {signOut} from "next-auth/react";
import {deleteCookie} from "cookies-next";

export const SignOutButton = () => {
    return (
        <button onClick={async () => {
            await signOut({callbackUrl: "/login"});
            deleteCookie(process.env.MOTION_USER as string)
        }}>
            로그아웃
        </button>
    )
}
