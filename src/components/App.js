import React, { useState, useEffect } from 'react'
import '../index.css'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'
import { api } from '../utils/api'
import { CurrentUserContext } from '../contexts/CurrentUserContext'
import EditProfilePopup from './EditProfilePopup'
import EditAvatarPopup from './EditAvatarPopup'

const initialPopupState = { isEditAvatarPopupOpen: false, isEditProfilePopupOpen: false, isAddPlacePopupOpen: false, isOverviewPopupOpen: false }

function App() {
  const [popupState, setPopupState] = useState(initialPopupState)
  const [selectedCard, setSelectedCard] = useState(null)
  const [userData, setUserData] = useState(null)
  const [cardsData, setCardsData] = useState([])
  useEffect(() => {
    Promise.all([api.getUserData(), api.getCards()])
      .then(([userData, cardsData]) => {
        setUserData(userData)
        setCardsData(cardsData)
      })
      .catch(err => {
        console.log(err + ' && Ошибка при получении данных пользователя / Ошибка при получении карточек')
      })
  }, [])

  const handleCardClick = cardData => {
    setSelectedCard(cardData)
  }
  const closeAllPopups = () => {
    setPopupState(initialPopupState)
    setSelectedCard(null)
  }
  const handleUpdateUser = newUserData => {
    setUserData(newUserData)
    closeAllPopups()
  }
  // const handleAvatarUpd = avatarData => {
  //   api.updUserData(avatarData)
  // }
  return (
    <CurrentUserContext.Provider value={userData}>
      <div>
        <Header />
        <Main
          updCardsData={newCardsData => {
            setCardsData(newCardsData)
          }}
          cardsData={cardsData}
          onEditAvatar={() => {
            setPopupState({ ...popupState, isEditAvatarPopupOpen: true })
          }}
          onEditProfile={() => {
            setPopupState({ ...popupState, isEditProfilePopupOpen: true })
          }}
          onAddPlace={() => {
            setPopupState({ ...popupState, isAddPlacePopupOpen: true })
          }}
          onOverviewPopup={() => {
            setPopupState({ ...popupState, isOverviewPopupOpen: true })
          }}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm title='Новое место' name='card-renderer' isOpen={popupState.isAddPlacePopupOpen} onClose={closeAllPopups} submitBtnText='Сохранить'>
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
        </PopupWithForm>
        <PopupWithForm title='Вы уверены?' name='delete-card' />
        <EditAvatarPopup onUpdateAvatar={newUserData => handleUpdateUser(newUserData)} isOpen={popupState.isEditAvatarPopupOpen} onClose={closeAllPopups} />
        <EditProfilePopup
          onUpdateUser={newUserData => {
            handleUpdateUser(newUserData)
          }}
          isOpen={popupState.isEditProfilePopupOpen}
          onClose={closeAllPopups}
        />
        <ImagePopup card={selectedCard} isOpen={popupState.isOverviewPopupOpen} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App
