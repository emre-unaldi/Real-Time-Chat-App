import React, {useState} from "react";
import styles from "../styles.module.css"
import {sendMessage} from "../../socketApi.tsx";
import {MessageData, useChat} from "../../context/ChatContext.tsx";
const ChatForm: React.FC = () => {
    const [message, setMessage] = useState<string>("")
    const {setMessages} = useChat()

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault()
        console.log(message)

        setMessages((prevState: MessageData[]) => [...prevState, {message, fromMe: true}])
        sendMessage(message)
        setMessage("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    className={styles.textInput}
                    value={message}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
                />
            </form>
        </div>
    )
}

export default ChatForm