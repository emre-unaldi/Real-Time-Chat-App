import React from "react";
import styles from "../styles.module.css";
import {MessageData, useChat} from "../../context/ChatContext.tsx";
import ChatItem from "../ChatItem";
import ScrollableFeed from "react-scrollable-feed";

const ChatList: React.FC = () => {
    const {messages} = useChat()

    return (
        <div className={styles.chatlist}>
            <ScrollableFeed>
                {
                    messages.map((item: MessageData, key: number) => (
                        <ChatItem key={key} item={item} />
                    ))
                }
            </ScrollableFeed>
        </div>
    )
}

export default ChatList