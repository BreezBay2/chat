import { create } from "zustand";

type UserType = {
    id: string;
    fullname: string;
    profilePicture: string;
};

export type MessageType = {
    id: string;
    body: string;
    senderId: string;
    createdAt: string;
};

interface ChatState {
    selectedUser: UserType | null;
    messages: MessageType[];
    setSelectedUser: (user: UserType | null) => void;
    setMessages: (messages: MessageType[]) => void;
}

const useChatStore = create<ChatState>((set) => ({
    selectedUser: null,
    messages: [],
    setSelectedUser: (user) => set({ selectedUser: user }),
    setMessages: (messages) => set({ messages: messages }),
}));

export default useChatStore;
