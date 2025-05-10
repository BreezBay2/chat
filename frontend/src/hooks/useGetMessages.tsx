import { useEffect, useState } from "react";
import useChatStore from "../zustand/useChatStore";

const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedUser } = useChatStore();

    useEffect(() => {
        const getMessages = async () => {
            if (!selectedUser) {
                return;
            }
            setLoading(true);
            setMessages([]);

            try {
                const res = await fetch(`/api/messages/${selectedUser.id}`);
                const data = await res.json();

                if (!res.ok) {
                    throw new Error(data.error || "An Error occured.");
                }

                setMessages(data);
            } catch (error: any) {
                console.log(error.message);
            } finally {
                setLoading(false);
            }
        };

        getMessages();
    }, [selectedUser, setMessages]);

    return { messages, loading };
};

export default useGetMessages;
