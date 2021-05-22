import '../index.css'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'

function App() {
  const avatarPopupSelector = 'avatar-upd'
  const editProfilePopupSelector = 'popup_type_profile-editor'
  const openedPopupSelector = 'popup_opened'
  const placeAdderPopupSelector = 'card-popup'
  const openPopup = popup => {
    popup.classList.add(openedPopupSelector)
  }
  const handleEditAvatarClick = () => {
    const avatarPopupElement = document.querySelector('#' + avatarPopupSelector)
    openPopup(avatarPopupElement)
  }
  const handleEditProfileClick = () => {
    const editProfilePopupElement = document.querySelector('.' + editProfilePopupSelector)
    openPopup(editProfilePopupElement)
  }
  const handleAddPlaceClick = () => {
    const adderPlacePopupElement = document.querySelector('#' + placeAdderPopupSelector)
    openPopup(adderPlacePopupElement)
  }
  return (
    <div>
      <Header />
      <Main handleEditAvatarClick={handleEditAvatarClick} handleEditProfileClick={handleEditProfileClick} handleAddPlaceClick={handleAddPlaceClick} />
      <Footer />
      <PopupWithForm title='Редактировать профиль' name='profile-editor' />
      {/* <div className='popup appearance' id='profile-popup'>
        <div className='popup__container'>
          <h2 className='popup__title'>Редактировать профиль</h2>
          <form className='popup__form' id='profile-editor' name='profile-editor' action='#' method='post'>
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
      </div> */}
      {/* <div className='popup appearance' id='card-popup'>
        <div className='popup__container'>
          <h2 className='popup__title'>Новое место</h2>
          <form className='popup__form' id='card-renderer' name='card-renderer' action='#' method='post'>
            <div className='popup__input-wrapper'>
              <input className='popup__input popup__input_data_name' placeholder='Название' id='pic-name' name='name' type='text' minLength='2' maxLength='30' autoComplete='off' required />
              <span className='popup__input-error' id='pic-name-error'>
                Вы пропустили это поле.
              </span>
            </div>
            <div className='popup__input-wrapper'>
              <input className='popup__input popup__input_data_description' placeholder='Ссылка на картинку' id='url' type='url' name='url' autoComplete='on' required />
              <span className='popup__input-error popup__input-error_description' id='url-error'>
                Введите адрес сайта.
              </span>
            </div>
            <button className='popup__save-btn' name='submitBtn' type='submit'>
              Сохранить
            </button>
          </form>
          <button onClick={handleClosePopupBtnClick} type='button' className='popup__close-btn'>
            <img className='popup__close-pic' src={closeBtnImage} alt='Кнопка закрыть' />
          </button>
        </div>
      </div>
      <div className='popup overview appearance' id='overview'>
        <div className='overview__container'>
          <img className='overview__pic' src="<%=require('/src/images/cards/arkhyz.jpg')%>" alt='Фото пейзажа' />
          <figcaption className='overview__caption'></figcaption>
          <button onClick={handleClosePopupBtnClick} type='button' className='popup__close-btn'>
            <img className='popup__close-pic' src={closeBtnImage} alt='Кнопка закрыть' />
          </button>
        </div>
      </div>
      <div className='popup certitude appearance' id='popup-delete-card'>
        <div className='popup__container'>
          <h2 className='popup__title popup__title_margin_none'>Вы уверены?</h2>
          <form className='popup__form' name='delete-card' action='#' method='post'>
            <button className='popup__save-btn popup__save-btn_margin-top' name='submit' type='submit'>
              Да
            </button>
          </form>
          <button onClick={handleClosePopupBtnClick} type='button' className='popup__close-btn'>
            <img className='popup__close-pic' src={closeBtnImage} alt='Кнопка закрыть' />
          </button>
        </div>
      </div>
      <div className='popup avatar-upd appearance' id='avatar-upd'>
        <div className='popup__container'>
          <h2 className='popup__title popup__title_margin_none'>Обновить аватар</h2>
          <form className='popup__form' id='avatar-upd-form' name='delete-card' action='#' method='post'>
            <div className='popup__input-wrapper'>
              <input id='avatar-upd-input' className='popup__input popup__input_avatar popup__input_data_description' placeholder='Ссылка на картинку' type='url' name='url' autoComplete='on' required />
              <span id='avatar-upd-input-error' className='popup__input-error popup__input-error_description popup__input-error_avatar'>
                Введите адрес картинки.
              </span>
            </div>
            <button className='popup__save-btn  popup__save-btn_avatar' name='submit' type='submit'>
              Сохранить
            </button>
          </form>
          <button onClick={handleClosePopupBtnClick} type='button' className='popup__close-btn'>
            <img className='popup__close-pic' src={closeBtnImage} alt='Кнопка закрыть' />
          </button>
        </div>
      </div> */}
    </div>
  )
}

export default App
