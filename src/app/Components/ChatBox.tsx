"use client"
import React, { useState, useEffect } from "react";
import {Send} from "lucide-react"
import Message from "./Message";
import { useUser } from "@auth0/nextjs-auth0/client";
import 'bootstrap/dist/css/bootstrap.css'
import "../globals.css"

interface Props {
    apiRoute: string,
    model: string
}

function ChatBox(props : Props) {
  const {apiRoute, model} = props;
  const [messages, setMessages] = useState([{ text: "", sender: "" }]); //array of messages
  const [inputValue, setInputValue] = useState("");
  const { user } = useUser();

  const responseFetcher = async() => {
    if(!user){
      return { message: "Error: User needs to be logged in!" };
    }
    const response = await fetch(apiRoute, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: inputValue,
      }),
    });
    if (!response.ok) {
      throw new Error("Failed to send message");
    }
    return response.json();
  }

  const  handleMessageSend = async () => {
    if (inputValue.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputValue, sender: "You" },
      ]);
      setInputValue("");
     
      try {
        const data = await responseFetcher();
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: data.message, sender: model },
        ]);
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };
  
  const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter')
      handleMessageSend();
  }

  const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="container mt-5 chatbox flex-grow-1 d-flex">
      <div className="card chatbox-card flex-grow-1 ">
        <div className="card-body messages chatbox-messages bg-[#2e3337]">
          {messages.map(
            (
              message,
              index
            ) => (
              <Message
                key={index}
                index={index}
                sender={message.sender}
                text={message.text}
              />
            )
          )}
        </div>
        {
          model?
          (
            <div className="card-footer container-fluid d-flex input chatbox-input bg-">
            <input
              type="text"
              className="form-control"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleEnterKey}
              placeholder="Type a message..."
            />
            <button className="btn btn-primary" onClick={handleMessageSend}>
              <Send />
            </button>
          </div>
          )
          : null
        }
        
      </div>
    </div>
  );
}

export default ChatBox;