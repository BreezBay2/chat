import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import prisma from "../db/prisma";

interface DecodedToken extends JwtPayload {
    userId: string;
}

declare global {
    namespace Express {
        export interface Request {
            user: {
                id: string;
            };
        }
    }
}

const protectRoute = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const token = req.cookies.jwt;

        if (!token) {
            res.status(401).json({ error: "Unauthorized." });
            return;
        }

        const decodedToken = jwt.verify(
            token,
            process.env.JWT_SECRET!
        ) as DecodedToken;

        if (!decodedToken) {
            res.status(401).json({ error: "Unauthorized" });
            return;
        }

        const user = await prisma.user.findUnique({
            where: { id: decodedToken.userId },
            select: {
                id: true,
                username: true,
                fullname: true,
                profilePicture: true,
            },
        });

        if (!user) {
            res.status(404).json({ error: "User not found." });
            return;
        }

        req.user = user;

        next();
    } catch (error: any) {
        console.log("Error", error.message);
        res.status(500).json({ error: "Internal Server Error." });
    }
};

export default protectRoute;
