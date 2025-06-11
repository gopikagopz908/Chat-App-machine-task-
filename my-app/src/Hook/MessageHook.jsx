import { useEffect, useState } from 'react';
import { axiosInstance } from '../axiosInstance';
import { useConversation } from '../context/ConversationContext';

export const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (data) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post(
        `/message/send/${selectedConversation._id}`,
        data
      );

      if (response.status === 201) {
        setMessages([...messages, response.data]);
      }
      return response.status
    } catch (error) {
      console.error('Send Message Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, sendMessage };
};


export const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  useEffect(() => {
   const getMessages = async () => {
         
      setLoading(true);
      try {
        const response = await axiosInstance.get(
          `/message/${selectedConversation._id}`
        );
        console.log(response,"resssssssssss")
        setMessages(response.data);
      } catch (error) {
        console.error('Get Messages Error:', error);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) {
      getMessages();
    }
  }, [selectedConversation?._id]);

  return { loading, messages };
};
