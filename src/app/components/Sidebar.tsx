"use client"
import React, {useState} from "react";
import BarItem from "./BarItem"
import User from "./User"
import { GoogleLoginButton } from "react-social-login-buttons";

export default function Sidebar(props) {

  const [activeItem, setActiveItem] = useState('GPT3.5');
  const handleItemClick = (item:string) => {
    setActiveItem(item);
  };

  const {user} = props;

  const [localUser, setUser] = useState(user);

  function handleLogIn() {
    //auth 0
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
        <BarItem text="GPT 3.5" href="gpt3_5" active={activeItem === 'GPT 3.5'} onClick={() => handleItemClick('GPT 3.5')}/>
        <BarItem text="GPT 4" href="gpt4" active={activeItem === 'GPT 4'} onClick={() => handleItemClick('GPT 4')}/>
        <BarItem text="About" href="#" active={activeItem === 'About'} onClick={() => handleItemClick('About')}/>
        <BarItem text="Agents" href="gpt3.5" active={activeItem === 'Agents'} onClick={() => handleItemClick('Agents')}/>
      </ul>
      <hr />
      {(localUser ? <User/> : <GoogleLoginButton onClick={handleLogIn} /> )}
    </div>
  );
}
