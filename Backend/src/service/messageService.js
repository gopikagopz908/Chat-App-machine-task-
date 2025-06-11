import Conversation from "../model/conversationModal.js";
import Message from "../model/messageModal.js";
import { getReceiverSocketId } from "../socket/socket.js";

export const sendMessageService = async (senderId, receiverId, message) => {
  let conversation = await Conversation.findOne({
    participants: { $all: [senderId, receiverId] },
  });

  if (!conversation) {
    conversation = await Conversation.create({
      participants: [senderId, receiverId],
    });
  }

  const newMessage = new Message({ senderId, receiverId, message });

  if (newMessage) {
    conversation.messages.push(newMessage._id);
  }

  await Promise.all([conversation.save(), newMessage.save()]);

  const receiverSocketId = getReceiverSocketId(receiverId);
  if (receiverSocketId) {
    io.to(receiverSocketId).emit("newMessage", newMessage);
  }

  return newMessage;
};

export const getMessageService = async (senderId, receiverId) => {
  const conversation = await Conversation.findOne({
    participants: { $all: [senderId, receiverId] },
  }).populate("messages");

  if (!conversation) {
    return [];
  }

  return conversation.messages;
};
