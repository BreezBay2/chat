import express from "express";
import protectRoute from "../middleware/protectRoute";
import { getMessages, sendMessage } from "../controllers/message.controller";

const router = express.Router();

router.post("/send/:id", protectRoute, sendMessage);
router.get("/:id", protectRoute, getMessages);

export default router;
