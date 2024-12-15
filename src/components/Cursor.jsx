import { useEffect, useState } from 'react'

const Cursor = ({ lightdark }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener('mousemove', updateCursorPosition)

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition)
    }
  }, [])

  return (
    <div
      style={{
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`,
        position: 'fixed',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: lightdark ? 'white' : 'black', 
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        transition: 'all 0.1s ease-out',
      }}
    />
  )
}

export default Cursor
