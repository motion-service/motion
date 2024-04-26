import React, {useContext, useEffect, useState} from "react";
import {SocketContext} from "@/app/context/SocketProvider";
import {UniqueContext} from "@/app/context/UniqueProvider";
import axios from "axios";

export type TBlockContext = {
    selectedAllCount: number | undefined;
    addSelectedAllCount: () => void;
    sendData: (selectedIndex: number, value: string) => void;
    blocks: ITestBlock[];
}

export const BlockContext = React.createContext<TBlockContext | null>(null);

const BlockProvider = ({children}: { children: React.ReactNode }) => {
    let socket = useContext(SocketContext);
    const [selectedAllCount, setSelectedAllCount] = useState<number>(0);
    const [blocks, setBlocks] = useState<ITestBlock[]>([]);
    let uniqueContext = useContext(UniqueContext);
    let uuid = uniqueContext?.uuid;

    const addSelectedAllCount = () => {
        if (selectedAllCount != 1) {
            setSelectedAllCount(prevState => ++prevState);
        } else {
            setSelectedAllCount(0);
        }
    }

    useEffect(() => {
        socket.emit("join", uuid);
        socket.on("connected", async function (data) {
            axios.post("/api/client", {"uuid": data}).then(value => {

            });
        })

        return () => {

        }
    }, []);

    const sendData = (selectedIndex: number, value: string) => {
        // socket.emit("send_data", {"selected": selectedIndex, "value": value});

    }

    return (
        <BlockContext.Provider value={{selectedAllCount, addSelectedAllCount, blocks, sendData}}>
            {
                children
            }
        </BlockContext.Provider>
    )
}

export default BlockProvider;
