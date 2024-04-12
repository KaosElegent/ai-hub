"use client"
import React from 'react'

interface Props {
    index: number,
    sender: string,
    text: string
}

export default function Message(props : Props) {

    return (
        <div key={props.index} className={`message ${props.sender}`}>
            <div className="text-white">
                {props.sender}
            </div>
            <div className="text-white mb-3">
                {props.text}
            </div>
        </div>

    )
} 