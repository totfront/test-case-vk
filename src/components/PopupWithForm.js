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

  return (
    <div className={`popup popup_type_${props.name} appearance`}>
      <div className='popup__container'>
        <h2 className='popup__title'>{props.title}</h2>
        <form className='popup__form' id={props.name} name={props.name} action='#' method='post'>
          <div className='popup__input-wrapper'>
            <input className='popup__input popup__input_data_name' id='profile-name' name='name' placeholder='Имя' type='text' minLength='2' maxLength='40' autoComplete='off' required />
            <span className='popup__input-error' id='profile-name-error'>
              Вы пропустили это поле.
            </span>
          </div>
          <div className='popup__input-wrapper'>
            <input className='popup__input popup__input_data_description' id='profile-job' name='description' placeholder='Вид деятельности' type='text' minLength='2' maxLength='200' autoComplete='off' required />
            <span className='popup__input-error' id='profile-job-error'>
              Вы пропустили это поле.
            </span>
          </div>
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
