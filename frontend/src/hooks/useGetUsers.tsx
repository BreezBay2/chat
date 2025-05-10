import { useEffect, useState } from "react";

type UserType = {
    id: string;
    fullname: string;
    profilePicture: string;
};

const useGetUsers = () => {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState<UserType[]>([]);

    useEffect(() => {
        const getUsers = async () => {
            setLoading(true);
            try {
                const res = await fetch("/api/user/all");
                const data = await res.json();

                if (data.error) {
                    throw new Error(data.error);
                }

                setUsers(data);
            } catch (error: any) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        getUsers();
    }, []);

    return { users, loading };
};

export default useGetUsers;
