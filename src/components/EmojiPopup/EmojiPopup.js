import React from 'react'
import { emojiData } from './emojiData'
function EmojiPopup(props) {
  const [totalEmojisPopupVisibility, setTotalEmojisPopupVisibility] = React.useState(true)
  const [recentEmojiPopupVisibility, setRecentEmojiPopupVisibility] = React.useState(false)
  const [recentEmojis, setRecentEmojis] = React.useState([])
  const showTotalEmojisPopup = () => {
    setTotalEmojisPopupVisibility(true)
    setRecentEmojiPopupVisibility(false)
  }
  const showRecentEmojisPoup = () => {
    setTotalEmojisPopupVisibility(false)
    setRecentEmojiPopupVisibility(true)
  }
  const maxRecentEmojiCounter = 25
  const handleEmojiClick = emoji => {
    let emojiDuplicateIdx
    // Check is some of recent emojis already has last clicked emoji
    if (
      recentEmojis.some((i, idx) => {
        if (i === emoji) {
          emojiDuplicateIdx = idx
        }
        return i === emoji
      })
    ) {
      setRecentEmojis(recentEmojis.splice(emojiDuplicateIdx, 1))
    }
    setRecentEmojis([emoji, ...recentEmojis])
    // Check for max count, if so delete the oldest emoji
    if (recentEmojis.length > maxRecentEmojiCounter) {
      recentEmojis.splice(maxRecentEmojiCounter - 1, 0)
      setRecentEmojis(recentEmojis)
    }
    props.setEmoji(emoji)
    props.onEmoji(emoji)
  }
  return (
    <article className='popup'>
      {totalEmojisPopupVisibility && (
        <div className='popup__emojis-container'>
          {emojiData.map((emojiType, idx) => {
            return (
              <div key={idx}>
                <h4 className='popup__emojis-heading'>{emojiType.title}</h4>
                <ul className='popup__emojis'>
                  {emojiType.items.map((emoji, idx) => {
                    return (
                      <li
                        onClick={() => {
                          handleEmojiClick(emoji)
                        }}
                        key={idx}
                        className='popup__emoji'>
                        {emoji}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      )}
      {recentEmojiPopupVisibility && (
        <div className='popup__emojis-container'>
          <h4 className='popup__emojis-heading'>Последние</h4>
          <ul className='popup__emojis'>
            {recentEmojis.map((emoji, idx) => {
              return (
                <li
                  onClick={() => {
                    handleEmojiClick(emoji)
                  }}
                  key={idx}
                  className='popup__emoji'>
                  {emoji}
                </li>
              )
            })}
          </ul>
        </div>
      )}
      <nav className='popup__navbar'>
        <button onClick={showTotalEmojisPopup} className={'btn popup__navbar-btn' + (totalEmojisPopupVisibility ? ' popup__navbar-btn_active' : '')}>
          <svg className='input-field__emoji-image' xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none'>
            <path d='M6.438 12.297a.9.9 0 011.273.15 2.772 2.772 0 00.516.415c.383.24.97.488 1.773.488.803 0 1.39-.249 1.773-.488a2.773 2.773 0 00.516-.416l.012-.013.002-.003a.9.9 0 011.4 1.132L13 13l.703.562-.001.002-.002.001-.002.004-.007.008-.018.021a3.516 3.516 0 01-.245.254c-.16.15-.394.345-.701.536A5.094 5.094 0 0110 15.15a5.094 5.094 0 01-2.727-.762 4.567 4.567 0 01-.701-.536 3.498 3.498 0 01-.245-.254l-.018-.021-.007-.008-.002-.004-.002-.001s0-.002.702-.564l-.703.562a.9.9 0 01.14-1.265zM8.25 8.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM13 9.5A1.25 1.25 0 1013 7a1.25 1.25 0 000 2.5z' fill='#99A2AD' />
            <path d='M10 .1C4.532.1.1 4.532.1 10s4.432 9.9 9.9 9.9 9.9-4.432 9.9-9.9S15.468.1 10 .1zM1.9 10a8.1 8.1 0 1116.2 0 8.1 8.1 0 01-16.2 0z' fill='#99A2AD' />
          </svg>
        </button>
        <button onClick={showRecentEmojisPoup} className={'btn popup__navbar-btn' + (recentEmojiPopupVisibility ? ' popup__navbar-btn_active' : '')}>
          <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M10.4 6.00001C10.4 5.50295 9.99706 5.10001 9.50001 5.10001C9.00295 5.10001 8.60001 5.50295 8.60001 6.00001V10.5C8.60001 10.8752 8.83272 11.211 9.184 11.3427L13.184 12.8427C13.6494 13.0172 14.1682 12.7814 14.3427 12.316C14.5172 11.8506 14.2814 11.3318 13.816 11.1573L10.4 9.87631V6.00001Z' fill='#99A2AD' />
            <path fillRule='evenodd' clipRule='evenodd' d='M10 0.100006C4.53239 0.100006 0.100006 4.53239 0.100006 10C0.100006 15.4676 4.53239 19.9 10 19.9C15.4676 19.9 19.9 15.4676 19.9 10C19.9 4.53239 15.4676 0.100006 10 0.100006ZM1.90001 10C1.90001 5.5265 5.5265 1.90001 10 1.90001C14.4735 1.90001 18.1 5.5265 18.1 10C18.1 14.4735 14.4735 18.1 10 18.1C5.5265 18.1 1.90001 14.4735 1.90001 10Z' fill='#99A2AD' />
          </svg>
        </button>
      </nav>
    </article>
  )
}

export default EmojiPopup
