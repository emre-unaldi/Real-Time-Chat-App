import React from "react";
import styles from "../styles.module.css"
import {MessageData} from "../../context/ChatContext.tsx";

interface ChatItemProps {
    item: MessageData
}

const ChatItem: React.FC<ChatItemProps> = ({item}) => {
    return (
        <div className={`${styles.chatItem} ${item.fromMe ? styles.right : ""}`}>
            {item.message}
        </div>
    )
}

export default ChatItem