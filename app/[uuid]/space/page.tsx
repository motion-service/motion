"use client"

import {Client} from "@/app/components/props/client";
import {useEffect, useState} from "react";
import {CustomTabs} from "@/app/components/props/custom-tabs";
import {setCookie} from "cookies-next";
import Link from "next/link";
import {SpaceNavbar} from "@/app/components/ui/space-navbar";
import {useRouter} from "next/navigation";

export default function Home({params: {uuid}}: { params: { uuid: string } }) {
    const router = useRouter();

    useEffect(() => {
        router.push(`/${uuid}/space/private`)
    }, []);

    return (
        <div>

        </div>
    );
}