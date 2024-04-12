import io from "socket.io-client";
import {useEffect} from "react";

let socket = io("http://182.221.77.49:8090/custom", {transports: ['websocket']});

export const useSocket = () => {
    useEffect(() => {
        socket.emit('client-ready');
        //TODO https://socket.io/docs/v4/emitting-events/
    }, [])

    return {socket};
}