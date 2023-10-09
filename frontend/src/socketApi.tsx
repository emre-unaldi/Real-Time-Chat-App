import io, {Socket} from "socket.io-client"
import {MessageData} from "./context/ChatContext.tsx";

let socket: Socket

export const init = (): void => {
    console.log("Connecting...")

    socket = io("http://localhost:3000", {
        transports: ["websocket"]
    })

    socket.on("connect", () => console.log("Connected !"))
}

export const sendMessage = (message: string): void => {
    if (socket) socket.emit("new-message", message)
}

export const subscribeChat = (callback: (message: string) => void): void => {
    if (!socket) return

    socket.on("receive-message", (message) => {
        callback(message)
    })
}

export const subscribeInitialMessages = (callback: (messages: MessageData[]) => void): void => {
    if (!socket) return

    socket.on("message-list", (messages) => {
        callback(messages)
    })
}