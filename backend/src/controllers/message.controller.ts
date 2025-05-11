import { Request, Response } from "express";
import prisma from "../db/prisma";
import { getReceiverSocketId, io } from "../socket/socket";

export const sendMessage = async (req: Request, res: Response) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user.id;

        let chat = await prisma.chat.findFirst({
            where: {
                participantIds: {
                    hasEvery: [senderId, receiverId],
                },
            },
        });

        if (!chat) {
            chat = await prisma.chat.create({
                data: {
                    participantIds: {
                        set: [senderId, receiverId],
                    },
                },
            });
        }

        const newMessage = await prisma.message.create({
            data: { senderId, body: message, chatId: chat.id },
        });

        if (newMessage) {
            chat = await prisma.chat.update({
                where: {
                    id: chat.id,
                },
                data: {
                    messages: {
                        connect: {
                            id: newMessage.id,
                        },
                    },
                },
            });
        }

        const receiverSocketId = getReceiverSocketId(receiverId);

        if (receiverSocketId) {
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }

        res.status(201).json(newMessage);
    } catch (error: any) {
        console.error("Error in Send Message Controller.", error.message);
        res.status(500).json({ error: "Internal Server Error." });
    }
};

export const getMessages = async (req: Request, res: Response) => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user.id;

        const chat = await prisma.chat.findFirst({
            where: { participantIds: { hasEvery: [senderId, userToChatId] } },
            include: { messages: { orderBy: { createdAt: "asc" } } },
        });

        if (!chat) {
            res.status(200).json([]);
            return;
        }

        res.status(200).json(chat.messages);
    } catch (error: any) {
        console.log("Error in Get Messages Controller.", error.message);
        res.status(500).json({ error: "Internal Server Error." });
    }
};
