import React, { useState } from 'react'

function VoiceInput({ onVoiceInput }) {
  const [listening, setListening] = useState(false)

  const startListening = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)()
    recognition.onstart = () => setListening(true)
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript
      onVoiceInput(transcript)
      setListening(false)
    }
    recognition.onerror = () => setListening(false)
    recognition.start()
  }

  return (
    <button onClick={startListening} disabled={listening}>
      {listening ? 'Listening...' : 'Voice Input'}
    </button>
  )
}

export default VoiceInput