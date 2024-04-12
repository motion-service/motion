"use client"
import {signIn, useSession} from "next-auth/react";

import {useRouter} from 'next/navigation'
import {Button} from "@/app/components/ui/button";

const SignInButton = () => {
    return (
        <div className="hover:cursor-pointer">
            <Button variant="ghost" onClick={async (event) => {
                await signIn("google", {callbackUrl: "/"})
            }}>
                Continue with Google
            </Button>
        </div>
    )
}

export default SignInButton