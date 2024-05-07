"use client";
import { useState, useEffect } from "react";
import Sidebar, {SidebarItem} from "../Components/Sidebar";
import { SidebarData } from "../Components/SidebarData";
import ChatBox from "../Components/ChatBox";
import "bootstrap/dist/css/bootstrap.css";
import "../globals.css";

export default function Home() {
  return (
    <div className="flex h-screen w-screen">
       <Sidebar>
        {SidebarData.map((item, index) => (
          <SidebarItem
            key={index}
            icon={item.icon}
            text={item.title}
            link={item.link}
          />
        ))}
      </Sidebar>
      <div className="flex flex-col w-full h-full justify-center bg-[#2e3337]">
        <ChatBox apiRoute="/api/gpt4" model="Bart"/>
      </div>
    </div>
  );
}
