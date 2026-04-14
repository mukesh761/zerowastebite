import mongoose from "mongoose";
import Convo from "../schema/conversationSchema.js";
import Message from "../schema/messageSchema.js";

const getConversationFilter = (senderId, receiverId, postId) => {
  const filter = {
    members: { $all: [senderId, receiverId] },
  };

  if (postId) {
    filter.postId = postId;
  }

  return filter;
};

const mapConversation = (conversation, userId) => {
  const partner = conversation.members.find(
    (member) => member?._id?.toString() !== userId
  );

  return {
    _id: conversation._id,
    partnerId: partner?._id || null,
    partnerName: partner?.name || "Unknown user",
    partnerEmail: partner?.email || "",
    postId: conversation.postId || null,
    updatedAt: conversation.updatedAt,
  };
};

export const sendMessage = async (req, res) => {
  try {
    const { senderId, receiverId, message, postId = null } = req.body;

    if (!senderId || !receiverId || !message?.trim()) {
      return res.status(400).json({ message: "Missing required fields." });
    }

    let conversation = await Convo.findOne(
      getConversationFilter(senderId, receiverId, postId)
    );

    if (!conversation) {
      conversation = await Convo.create({
        members: [senderId, receiverId],
        postId,
      });
    }

    const newMsg = await Message.create({
      senderId,
      receiverId,
      conversationId: conversation._id,
      message: message.trim(),
    });

    conversation.messages.push(newMsg._id);
    await conversation.save();

    return res.status(201).json(newMsg);
  } catch (error) {
    return res.status(500).json({ message: "Failed to send message.", error });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { senderId, receiverId } = req.params;
    const { postId } = req.query;

    if (!senderId || !receiverId) {
      return res.status(400).json({ message: "Missing users for conversation." });
    }

    const convo = await Convo.findOne(getConversationFilter(senderId, receiverId, postId));

    if (!convo) {
      return res.json([]);
    }

    const messages = await Message.find({ conversationId: convo._id }).sort({
      createdAt: 1,
    });

    return res.json(messages);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch messages.", error });
  }
};

export const getConversations = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid user id." });
    }

    const conversations = await Convo.find({
      members: userId,
    })
      .populate("members", "name email")
      .sort({ updatedAt: -1 });

    const data = conversations.map((conversation) =>
      mapConversation(conversation, userId)
    );

    return res.json(data);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch conversations.", error });
  }
};

export const getOrCreateConversation = async (req, res) => {
  try {
    const { senderId, receiverId, postId = null } = req.body;

    if (!senderId || !receiverId) {
      return res.status(400).json({ message: "Missing users for conversation." });
    }

    let conversation = await Convo.findOne(
      getConversationFilter(senderId, receiverId, postId)
    );

    if (!conversation) {
      conversation = await Convo.create({
        members: [senderId, receiverId],
        postId,
      });
    }

    const populatedConversation = await Convo.findById(conversation._id).populate(
      "members",
      "name email"
    );

    return res.json(mapConversation(populatedConversation, senderId));
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Failed to create or fetch conversation.", error });
  }
};