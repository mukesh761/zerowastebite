import express from "express";
import {
  sendMessage,
  getMessages,
  getConversations,
  getOrCreateConversation,
} from "../controller/chatController.js";

const router = express.Router();

router.post("/conversation", getOrCreateConversation);
router.post("/send", sendMessage);
router.get("/conversations/:userId", getConversations);
router.get("/:senderId/:receiverId", getMessages);

export default router;