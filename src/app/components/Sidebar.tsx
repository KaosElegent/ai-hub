"use client"
import React, {useState} from "react";
import BarItem from "./BarItem"
import User from "./User"
import { GoogleLoginButton } from "react-social-login-buttons";

export default function Sidebar(props) {

  const [activeItem, setActiveItem] = useState('Home');
  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const {user} = props

  const [localUser, setUser] = useState(user);

  function handleLogIn() {
    setUser(true)
  }

  return (
    <div
      className="d-flex h-100 flex-column flex-shrink-0 p-3 text-white bg-dark"
      style={{ width: "280px" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi me-2" width="40" height="32"></svg>
        <span className="fs-4">J.A.R.V.I.S</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <BarItem text="Home" active={activeItem === 'Home'} onClick={() => handleItemClick('Home')}/>
        <BarItem text="About" active={activeItem === 'About'} onClick={() => handleItemClick('About')}/>
        <BarItem text="Agents" active={activeItem === 'Agents'} onClick={() => handleItemClick('Agents')}/>
      </ul>
      <hr />
      {(localUser ? <User/> : <GoogleLoginButton onClick={handleLogIn} /> )}
    </div>
  );
}
