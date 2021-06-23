import React, { useState, useEffect } from 'react'
import '../index.css'

function App() {
  const [inputValue, setInputValue] = React.useState('')

  const getInputValue = e => {
    setInputValue(e.target.value)
    return e.target.value
  }
  return (
    <div>
      <form className='input-field'>
        <input className='input-field__input' placeholder='Ваше сообщение' value={inputValue} onChange={getInputValue} />
        <svg className='input-field__image' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
          <path fill='#c5d0db' d='M8.4 14.3C8.8 14 9.4 14 9.7 14.4 9.7 14.4 9.7 14.4 9.7 14.4 9.7 14.5 9.8 14.5 9.8 14.5 9.9 14.6 10 14.7 10.2 14.9 10.6 15.1 11.2 15.4 12 15.4 12.8 15.4 13.4 15.1 13.8 14.9 14 14.7 14.1 14.6 14.2 14.5 14.2 14.5 14.3 14.5 14.3 14.4L14.3 14.4 14.3 14.4C14.6 14 15.2 14 15.6 14.3 16 14.6 16 15.2 15.7 15.6L15 15C15.7 15.6 15.7 15.6 15.7 15.6L15.7 15.6 15.7 15.6 15.7 15.6 15.7 15.6 15.7 15.6C15.7 15.6 15.6 15.6 15.6 15.7 15.6 15.7 15.5 15.8 15.4 15.9 15.3 16 15 16.2 14.7 16.4 14.1 16.8 13.2 17.2 12 17.2 10.8 17.2 9.9 16.8 9.3 16.4 9 16.2 8.7 16 8.6 15.9 8.5 15.8 8.4 15.7 8.4 15.7 8.4 15.6 8.3 15.6 8.3 15.6L8.3 15.6 8.3 15.6 8.3 15.6 8.3 15.6C8.3 15.6 8.3 15.6 9 15L8.3 15.6C8 15.2 8 14.6 8.4 14.3Z' className='input-field__image-part' />
          <path fill='#c5d0db' d='M10.3 10.3C10.3 10.9 9.7 11.5 9 11.5 8.3 11.5 7.8 10.9 7.8 10.3 7.8 9.6 8.3 9 9 9 9.7 9 10.3 9.6 10.3 10.3Z' className='input-field__image-part' />
          <path fill='#c5d0db' d='M15 11.5C15.7 11.5 16.3 10.9 16.3 10.3 16.3 9.6 15.7 9 15 9 14.3 9 13.8 9.6 13.8 10.3 13.8 10.9 14.3 11.5 15 11.5Z' className='input-field__image-part' />
          <path fill='#c5d0db' d='M12 2.1C6.5 2.1 2.1 6.5 2.1 12 2.1 17.5 6.5 21.9 12 21.9 17.5 21.9 21.9 17.5 21.9 12 21.9 6.5 17.5 2.1 12 2.1ZM3.9 12C3.9 7.5 7.5 3.9 12 3.9 16.5 3.9 20.1 7.5 20.1 12 20.1 16.5 16.5 20.1 12 20.1 7.5 20.1 3.9 16.5 3.9 12Z' className='input-field__image-part' />
        </svg>
      </form>
    </div>
  )
}

export default App
