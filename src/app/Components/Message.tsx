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
            <div>
                {props.sender}
            </div>
            <div>
                {props.text}
            </div>
        </div>

    )
} 