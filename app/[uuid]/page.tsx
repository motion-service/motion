"use client"

import {Client} from "@/app/components/props/client";
import UniqueProvider from "@/app/context/UniqueProvider";

export default function Home({params: {uuid}}: { params: { uuid: string } }) {

    return (
        <UniqueProvider uuid={uuid}>
            <Client/>
        </UniqueProvider>
    );
}
