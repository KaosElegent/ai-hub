"use client";
import { useState, useEffect } from "react";
import Sidebar from "./Components/Sidebar";
import ChatBox from "./Components/ChatBox";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";

export default function Home() {
  const [user, setUser] = useState({});

  return (
    <div className="flex h-screen w-screen">
      <Sidebar />
      <div className="flex flex-col w-full h-full justify-center bg-[#2e3337]">
        <ChatBox apiRoute="api/gpt35" model="ChatGPT"/>
      </div>
    </div>
  );
}
