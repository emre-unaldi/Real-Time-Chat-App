import React, {createContext, ReactNode, useContext, useState} from "react";

interface ChatProviderProps {
    children: ReactNode
}

export interface MessageData {
    message: string,
    fromMe?: boolean
}

interface ChatContextData {
    messages: MessageData[],
    setMessages: React.Dispatch<React.SetStateAction<MessageData[]>>
}

const initialValues: ChatContextData = {
    messages: [],
    setMessages: (): void => {}
}

const ChatContext: React.Context<ChatContextData> = createContext<ChatContextData>(initialValues);

export const useChat = (): ChatContextData => {
    return useContext(ChatContext)
}

export const ChatProvider: React.FC<ChatProviderProps> = ({children}) => {
    const [messages, setMessages] = useState<MessageData[]>([])

    const values: ChatContextData = {
        messages,
        setMessages
    }

    return <ChatContext.Provider value={values}>
        {children}
    </ChatContext.Provider>
}