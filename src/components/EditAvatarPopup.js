import React from 'react'
// import selectors from '../utils/selectors'
import PopupWithForm from './PopupWithForm'
function EditAvatarPopup(props) {
  // const [url, setUrl] = React.useState()
  // function handleChange(e) {
  //   setUrl(e.target.value)
  // }
  // const popupClassName = `popup popup_type_${props.name} ${props.isOpen && selectors.openedPopup} appearance`
  return (
    <PopupWithForm title='Обновить аватар' name='avatar-updater' isOpen={props.isOpen} onClose={props.closeAllPopups} submitBtnText='Сохранить'>
      <div className='popup__input-wrapper'>
        <input id='avatar-upd-input' onChange={handleChange} className='popup__input popup__input_avatar popup__input_data_description' placeholder='Ссылка на картинку' type='url' name='url' autoComplete='on' required />
        <span id='avatar-upd-input-error' className='popup__input-error popup__input-error_description popup__input-error_avatar'>
          Введите адрес картинки.
        </span>
      </div>
    </PopupWithForm>
  )
}

export default EditAvatarPopup
