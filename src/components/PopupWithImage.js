import React from 'react'
import closeBtnImage from '../images/popup/close-btn.svg'
import selectors from '../utils/selectors'

function PopupWithForm(props) {
  const openedPopupSelector = 'popup_opened'
  const handleClosePopupBtnClick = e => {
    const popup = e.target.closest('.' + selectors.popup)
    closePopup(popup)
  }
  const closePopup = popup => {
    popup.classList.remove(openedPopupSelector)
  }
  const handleOverlayClick = e => {
    if (e.target.classList.contains('popup_opened')) {
      closePopup(e.target)
    }
  }
  return (
    <div onClick={handleOverlayClick} className='popup overview appearance' id='overview'>
      <div className='overview__container'>
        <img className='overview__pic' src='' alt='Фото пейзажа' />
        <figcaption className='overview__caption'></figcaption>
        <button onClick={handleClosePopupBtnClick} type='button' className='popup__close-btn'>
          <img className='popup__close-pic' src={closeBtnImage} alt='Кнопка закрыть' />
        </button>
      </div>
    </div>
  )
}

export default PopupWithForm
