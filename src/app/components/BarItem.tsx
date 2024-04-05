"use client"
import React, { useState } from "react";

export default function BarItem(props) {
  const { text, active, onClick } = props;
  
  return (
    <li className="nav-item" onClick={onClick}>
      <a
        href="#"
        className={"nav-link" + (active ? " active" : " text-white")}
        aria-current="page"
      >
        <svg className="bi me-2" width="16" height="16"></svg>
        {text}
      </a>
    </li>
  );
}
