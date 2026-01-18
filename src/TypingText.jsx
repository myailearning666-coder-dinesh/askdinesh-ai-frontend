import React, { useState, useEffect } from 'react'

function TypingText({ text }) {
  const [displayedText, setDisplayedText] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(displayedText + text[index])
        setIndex(index + 1)
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [index, text, displayedText])

  return <p>{displayedText}</p>
}

export default TypingText