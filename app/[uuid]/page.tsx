"use client"

import {Client} from "@/app/components/props/client";

export default function Home({params: {uuid}}: { params: { uuid: string } }) {

    //TODO https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations server comp 이해 하기
    //TODO check url is UUID type
    //TODO check if API server is down

    return (
        <Client uuid={uuid}/>
    );
}