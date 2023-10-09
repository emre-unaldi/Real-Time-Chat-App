import React, {useEffect} from "react";
import ChatList from "../ChatList";
import ChatForm from "../ChatForm";
import {init, subscribeChat, subscribeInitialMessages} from "../../socketApi.tsx";
import {MessageData, useChat} from "../../context/ChatContext.tsx";

const Container: React.FC = () => {
    const {setMessages} = useChat()

    useEffect(() => {
        init()

        subscribeInitialMessages((messages: MessageData[]) => {
            setMessages(messages)
        })

        subscribeChat((message: string): void => {
            setMessages((presState: MessageData[]) => [...presState, {message}])
        })
    }, [])

    return (
        <div>
            <ChatList/>
            <ChatForm/>
        </div>
    )
}

export default Container