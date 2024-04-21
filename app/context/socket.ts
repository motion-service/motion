import React from "react"
import io from "socket.io-client"

export const socket = io("ws://localhost:8090/");
export const SocketContext = React.createContext(socket);