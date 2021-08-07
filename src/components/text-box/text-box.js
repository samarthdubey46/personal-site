import React from 'react'
import './style.css'

export default function Text_box({ heading, paragraph, heading_family }) {
    return (
        <div className="container">
            <h1 className="header" >{heading}</h1>
            <div className="text-div">
                <p className="text" >{paragraph}</p>
            </div>
        </div>
    )
}
