"use client"
import React from 'react'

export default function Message(props) {

    return (
        <div key={props.index} className={`message ${props.sender}`}>
            <div>
                {props.sender}
            </div>
            <div>
                {props.text}
            </div>
        </div>

    )
} 