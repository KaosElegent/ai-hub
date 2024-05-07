import React from "react"
import HomeIcon from '@mui/icons-material/Home';
import ControlPointDuplicateIcon from '@mui/icons-material/ControlPointDuplicate';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import "../globals.css"

export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link:"/"
    },
    {
        title: "GPT3.5",
        icon: <ControlPointDuplicateIcon />,
        link:"/gpt35"
    },
    {
        title: "GPT4",
        icon: <ControlPointDuplicateIcon />,
        link:"/gpt4"
    },
    {
        title: "Cohere",
        icon: <ControlPointDuplicateIcon />,
        link:"/cohere"
    },
    {
        title: "Gemini",
        icon: <ControlPointDuplicateIcon />,
        link:"/gemini"
    },
    {
        title: "Bard",
        icon: <ControlPointDuplicateIcon />,
        link:"/bard"
    },
    {
        title: "Login",
        icon: <LoginIcon />,
        link:"/api/auth/login"
    },
    {
        title: "Logout",
        icon: <LogoutIcon />,
        link:"/api/auth/logout"
    }
]
