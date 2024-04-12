"use client"
import {CustomBreadcrumb} from "@/app/components/ui/custom-breadcrumb";
import {LiaComment} from "react-icons/lia";
import {FaComment, FaHistory, FaSquarespace} from "react-icons/fa";
import {useEffect} from "react";
import {useAccount} from "@/app/hook/useAccount";
import Link from "next/link";
import {Button} from "@/app/components/ui/button";
import {redirect, useRouter} from "next/navigation";

interface NavbarProp {
    uuid: string;
}

export const Navbar = ({uuid}: NavbarProp) => {
    const router = useRouter();
    useEffect(() => {
        console.log("userUuid", uuid);

    }, []);

    return (
        <nav className="bg-[#191919] text-white px-4 py-2 sticky top-0 z-10">
            <div className="max-w-screen-xl mx-auto">
                <div className="flex justify-between">
                    <CustomBreadcrumb/>
                    <div className="flex items-center">
                        <a><FaComment/></a>
                        <a><FaHistory/></a>
                        <Button onClick={() => {
                            router.push(`/${uuid}/space`)
                        }} variant="ghost">
                            <FaSquarespace/>
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};