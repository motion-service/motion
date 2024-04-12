"use client"
import {SpaceNavbar} from "@/app/components/ui/space-navbar";
import {useAccount} from "@/app/hook/useAccount";
import {useState} from "react";

export default function Layout({
                                   children,
                               }: Readonly<{
    children: React.ReactNode;
}>) {
    let {userUuid} = useAccount();

    const [isEmpty, setIsEmpty] = useState<boolean>(false);

    return (
        <main>
            <SpaceNavbar uuid={userUuid} isEmpty={isEmpty}/>

            <div className="flex justify-center">
                {children}
            </div>
        </main>
    );
}