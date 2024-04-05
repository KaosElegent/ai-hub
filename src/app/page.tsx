"use client"
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import ChatBox from "./components/ChatBox";
import 'bootstrap/dist/css/bootstrap.css'
import './globals.css'


export default function Home() {
  const [user, setUser] = useState({});

  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <Sidebar user={user} />
        <div
          className="col d-flex justify-content-center"
          style={{ backgroundColor: "#2e3337" }}
        >
          <ChatBox />
        </div>
      </div>
    </div>
  );
  
}
