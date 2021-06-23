import React, { useState, useEffect } from 'react'
import '../index.css'
import EmojiPopup from './EmojiPopup'

function App() {
  const [emojiPopupState, setEmojiPopupState] = React.useState(false)
  const [currentEmoji, setCurrentEmoji] = React.useState('')
  const [currentText, setCurrentText] = React.useState('')
  const showEmojiPopup = e => {
    e.preventDefault()
    setEmojiPopupState(!emojiPopupState)
  }
  const getText = e => {
    console.log(e.target.textContent)
    setCurrentText(currentText + e.target.textContent)
    e.target.textContent = ''
  }
  return (
    <div>
      <EmojiPopup />
      <section className='input-field'>
        {emojiPopupState && (
          <EmojiPopup
            setEmoji={setCurrentEmoji}
            onEmoji={emoji => {
              setCurrentText(currentText + currentEmoji)
            }}
          />
        )}

        <div className='input-field__text-area'>
          {currentText}
          <div className='input-field__input-area' role='textbox' onInput={getText} contentEditable></div>
        </div>
        <button className='btn' onClick={showEmojiPopup}>
          <svg className='input-field__emoji-image' xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none'>
            <path d='M6.438 12.297a.9.9 0 011.273.15 2.772 2.772 0 00.516.415c.383.24.97.488 1.773.488.803 0 1.39-.249 1.773-.488a2.773 2.773 0 00.516-.416l.012-.013.002-.003a.9.9 0 011.4 1.132L13 13l.703.562-.001.002-.002.001-.002.004-.007.008-.018.021a3.516 3.516 0 01-.245.254c-.16.15-.394.345-.701.536A5.094 5.094 0 0110 15.15a5.094 5.094 0 01-2.727-.762 4.567 4.567 0 01-.701-.536 3.498 3.498 0 01-.245-.254l-.018-.021-.007-.008-.002-.004-.002-.001s0-.002.702-.564l-.703.562a.9.9 0 01.14-1.265zM8.25 8.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM13 9.5A1.25 1.25 0 1013 7a1.25 1.25 0 000 2.5z' fill='#C5D0DB' />
            <path d='M10 .1C4.532.1.1 4.532.1 10s4.432 9.9 9.9 9.9 9.9-4.432 9.9-9.9S15.468.1 10 .1zM1.9 10a8.1 8.1 0 1116.2 0 8.1 8.1 0 01-16.2 0z' fill='#C5D0DB' />
          </svg>
        </button>
      </section>
    </div>
  )
}

export default App
