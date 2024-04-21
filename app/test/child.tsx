"use client"
import {useCallback, useContext, useEffect} from "react";
import {SocketContext} from "@/app/context/socket";

export const GrandChild = () => {
    const socket = useContext(SocketContext);


    useEffect(() => {
        socket.emit("message", "qwerqwer");
        socket.emit("chatting", "qwerqwer");
    });

    return (
        <div>
            <button onClick={() => {

                socket.on('broadcast', function (msg) {
                    console.log(msg);
                });
            }}>
                join Channel
            </button>
        </div>
    );
};