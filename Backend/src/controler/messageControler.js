import asyncHandler from "../middleWare/asyncHandler.js";
import { getMessageService, sendMessageService } from "../service/messageService.js";

export const sendMessage = asyncHandler(async (req, res) => {
  const { message } = req.body;
  const { id: receiverId } = req.params;
  const {userId:senderId} =req.user;
  const newMessage = await sendMessageService(senderId, receiverId, message);
  res.status(201).json(newMessage);
});

export const getMessage = asyncHandler(async (req, res) => {
  const { id: userToChatId } = req.params;
  const {userId:senderId} =req.user;
console.log(senderId,'kkkk')
  const messages = await getMessageService(senderId, userToChatId);

  if (messages.length === 0) {
    return res.status(200).json([]);
  }

  res.status(200).json(messages);
});
