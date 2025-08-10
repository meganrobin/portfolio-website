import React, { useRef, useState } from 'react'
import './Tooltip.css'

export const Tooltip = ({ text, children }) => {
    const [isVisible, setIsVisible] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const timeoutRef = useRef(null)
    const mousePosRef = useRef({ x: 0, y: 0 })

    return (
        <div
            className='tooltip-container'
            onMouseMove={e => {
                setIsVisible(false)
                const rect = e.currentTarget.getBoundingClientRect()
                mousePosRef.current = {
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top
                }
            }}
            onMouseEnter={() => {
                timeoutRef.current = setTimeout(() => {
                    setPosition(mousePosRef.current)
                    setIsVisible(true)
                }, 600)
            }}
            onMouseLeave={() => {
                clearTimeout(timeoutRef.current)
                setIsVisible(false)
            }}
        >
            {children}
            {isVisible && <p className='tooltip' style={{ left: position.x + 5, top: position.y + 5}}>
                {text}
            </p>}
        </div>
    )
}