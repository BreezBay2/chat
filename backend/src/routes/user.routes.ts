import express from "express";
import protectRoute from "../middleware/protectRoute";
import { getUsers } from "../controllers/users.controller";

const router = express.Router();

router.get("/all", protectRoute, getUsers);

export default router;
