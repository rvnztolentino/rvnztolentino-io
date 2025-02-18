"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Send, MessageSquare } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyCKGPuLJGfrMDXdmNjWLYR6eRzfX6Ah4zU");
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: 
      `Instruction:
        You're name is Keiji and you are an AI Assistant for Renz's portfolio/personal site. You are designed to help or answer user's questions about the site.
        You're answers should be limited to the site's content, the information i provide, and should not provide any personal information about Renz.
        You can also provide some information about the site's content and features.
        Note that every page is located at the Navigation bar.

        Including the projects, blog posts, projects, about page, and other information which can be accessed on the
        Navigation bar (On PC it's located at the left side of the site, on Mobile at top).
        Renz's resume is currently not available for download on this site (I will update this soon).
        To contact Renz, you can tell the user to send a message on the contact page which is on the Navigation bar as well.
        Or they could contact me on rvnztolentino@outlook.com
        To access Renz's social, you can tell the user to open the linktree link on the Navigation bar which is where Renz's socials are located.
        Shorten your messages as well.
      `,
});

const ChatMessage = ({ message, isUser }) => (
  <div className={`flex gap-2 mb-4 ${isUser ? 'flex-row-reverse' : ''}`}>
    <Avatar>
      {isUser ? (
        <>
          <AvatarImage src="https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg" />
          <AvatarFallback>U</AvatarFallback>
        </>
      ) : (
        <>
          <AvatarImage src="https://avatars.fastly.steamstatic.com/8db289a63fe60fc2c6b1f79f50f5cbb2d450c766_full.jpg" />
          <AvatarFallback>KJ</AvatarFallback>
        </>
      )}
    </Avatar>
    <div className={`max-w-[80%] ${isUser ? 'text-right' : ''}`}>
      <div className="text-sm font-semibold mb-1">
        {isUser ? 'You' : 'Keiji'}
      </div>
      <div className={`rounded-lg p-3 ${
        isUser 
          ? 'bg-black text-white' 
          : 'bg-light-gray-2 text-black'
      }`}>
        {message}
      </div>
    </div>
  </div>
);

const Chat = () => {
  const [messages, setMessages] = useState([
    { text: "Hey! I'm Keiji, Renz's AI assistant. How can I help you today?", isUser: false },
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]); // Scroll down automatically whenever messages update

  const generateResponse = async (userMessage) => {
    try {
      const result = await model.generateContent(userMessage);
      const response = await result.response;
      const text = response.text();
      return text;
    } catch (error) {
      console.error('Error generating response:', error);
      return "I'm temporarily unavailable. Please try again later.";
    }
  };

  const handleSend = async () => {
    if (inputText.trim()) {
      // Add user message
      setMessages(prev => [...prev, { text: inputText, isUser: true }]);
      const userMessage = inputText;
      setInputText('');
      setIsLoading(true);
      
      // Get AI response
      const response = await generateResponse(userMessage);
      
      setMessages(prev => [...prev, {
        text: response,
        isUser: false
      }]);
      
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-4 right-4">
      <Popover>
        <PopoverTrigger>
          <div className="flex justify-center items-center rounded-full bg-black text-white font-noto-sans hover:bg-white hover:text-black border-2 transition-all duration-300 ease-in-out text-sm w-14 h-14">
            <MessageSquare />
          </div>
        </PopoverTrigger>
        <PopoverContent className="xs:w-80 lg:w-96 h-[500px]">
          <div className="flex space-x-2 mb-4 border-b border-light-gray-2 pb-2">
            <Avatar>
              <AvatarImage src="https://avatars.fastly.steamstatic.com/8db289a63fe60fc2c6b1f79f50f5cbb2d450c766_full.jpg" />
              <AvatarFallback>KJ</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <p className="font-bold">Keiji</p>
              <p className="text-sm">AI Assistant</p>
            </div>
          </div>
          
          <div className="h-[340px] overflow-y-auto mb-4 space-y-4">
            {messages.map((message, index) => (
              <ChatMessage 
                key={index}
                message={message.text}
                isUser={message.isUser}
              />
            ))}
            {isLoading && (
              <div className="flex justify-center">
                <div className="animate-pulse text-gray-400">Keiji is typing...</div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="flex space-x-2">
            <Input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              className="p-2 rounded-full bg-black text-white hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Chat;