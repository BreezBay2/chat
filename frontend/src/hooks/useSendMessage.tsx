import { useState } from "react";
import useChatStore from "../zustand/useChatStore";

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedUser } = useChatStore();

    const sendMessage = async (message: string) => {
        if (!selectedUser) {
            return;
        }
        setLoading(true);

        try {
            const res = await fetch(`/api/messages/send/${selectedUser.id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message }),
            });
            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error);
            }

            setMessages([...messages, data]);
        } catch (error: any) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    };
    return { sendMessage, loading };
};

export default useSendMessage;
