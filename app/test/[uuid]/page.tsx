"use client"

import {GrandChild} from "@/app/test/child";
import {socket, SocketContext} from "@/app/context/socket";

export default function Home({params: {uuid}}: { params: { uuid: string } }) {

    return (
        <SocketContext.Provider value={socket}>
            <GrandChild uuid={uuid}/>
        </SocketContext.Provider>
    );
}
