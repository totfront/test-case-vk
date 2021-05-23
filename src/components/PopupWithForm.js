import React from 'react'
import closeBtnImage from '../images/popup/close-btn.svg'
import selectors from '../utils/selectors'

function PopupWithForm(props) {
  const closePopup = () => {
    props.onClose()
  }
  const handleOverlayClick = e => {
    if (e.target.classList.contains(selectors.openedPopup)) {
      closePopup()
      props.onClose()
    }
  }
  const handleClosePopupBtnClick = () => {
    closePopup()
    props.onClose()
  }
  let openedPopupClass = null
  if (props.isOpen) {
    openedPopupClass = selectors.openedPopup
  }
  return (
    <div onClick={handleOverlayClick} className={`popup popup_type_${props.name} ${openedPopupClass} appearance`}>
      <div className='popup__container'>
        <h2 className='popup__title'>{props.title}</h2>
        <form className='popup__form' id={props.name} name={props.name} action='#' method='post'>
          {props.children}
          <button name='submitBtn' className='popup__save-btn' type='submit'>
            Сохранить
          </button>
        </form>
        <button onClick={handleClosePopupBtnClick} type='button' className='popup__close-btn'>
          <img className='popup__close-pic' src={closeBtnImage} alt='Кнопка закрыть' />
        </button>
      </div>
    </div>
  )
}

export default PopupWithForm
