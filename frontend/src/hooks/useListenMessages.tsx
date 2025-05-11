import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useChatStore from "../zustand/useChatStore";

const useListenMessages = () => {
    const { socket } = useSocketContext();
    const { messages, setMessages } = useChatStore();

    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            setMessages([...messages, newMessage]);
        });

        return () => {
            socket?.off("newMessage");
        };
    }, [socket, messages, setMessages]);
};

export default useListenMessages;
