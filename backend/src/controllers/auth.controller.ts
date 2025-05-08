import { Request, Response } from "express";
import prisma from "../db/prisma.js";
import bcryptjs from "bcryptjs";
import generateToken from "../utils/generateToken.js";

export const signup = async (req: Request, res: Response) => {
    try {
        const { username, fullname, password, confirmPassword } = req.body;

        if (!username || !fullname || !password || !confirmPassword) {
            res.status(400).json({ error: "Please fill in all inputs." });
            return;
        }

        if (password !== confirmPassword) {
            res.status(400).json({ error: "Password confirmation failed." });
            return;
        }

        const user = await prisma.user.findUnique({ where: { username } });

        if (user) {
            res.status(400).json({ error: "Username already exists" });
            return;
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const profilePicture = `https://avatar.iran.liara.run/username?username=${username}`;

        const newUser = await prisma.user.create({
            data: {
                username,
                fullname,
                password: hashedPassword,
                profilePicture: profilePicture,
            },
        });

        if (newUser) {
            generateToken(newUser.id, res);

            res.status(201).json({
                id: newUser.id,
                fullname: newUser.fullname,
                username: newUser.username,
                profilePicture: newUser.profilePicture,
            });
        } else {
            res.status(400).json({ error: "Invalid User Data." });
        }
    } catch (error: any) {
        console.log("Error in Signup Controller. ", error.message);
        res.status(500).json({ error: "Internal Server Error." });
    }
};
