import prisma from "../db/prisma";
import { Request, Response } from "express";

export const getUsers = async (req: Request, res: Response) => {
    try {
        const userId = req.user.id;

        const users = await prisma.user.findMany({
            where: {
                id: {
                    not: userId,
                },
            },
            select: { id: true, fullname: true, profilePicture: true },
        });

        res.status(200).json(users);
    } catch (error: any) {
        console.log("Error in Get Users Controller.", error.message);
        res.status(500).json({ error: "Internal Server Error." });
    }
};
