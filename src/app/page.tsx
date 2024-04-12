"use client";
import { useState, useEffect } from "react";
import Sidebar from "./Components/Sidebar";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";

export default function Home() {
  const [user, setUser] = useState({});

  return (
    <div className="h-screen w-screen">
      <Sidebar />
    </div>
  );
}
