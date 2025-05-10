export const formatMessageTime = (date: string) => {
    const time = new Date(date);
    const hours = time.getHours().toString().padStart(2, "0");
    const minutes = time.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
};
