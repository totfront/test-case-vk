import React, { useEffect, useState } from 'react'
import editBtnImage from '../images/profile/profile__edit-btn.svg'
import { api } from '../utils/api'
import Card from './Card'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function Main(props) {
  const [userData, setUserData] = useState(null)
  const [cardsData, setCardsData] = useState([])
  const currentUser = React.useContext(CurrentUserContext)
  useEffect(() => {
    api
      .getUserData()
      .then(data => {
        setUserData(data)
        api
          .getCards()
          .then(cardsData => {
            setCardsData(cardsData)
          })
          .catch(err => {
            console.log(err + ' && Ошибка при получении карточек')
          })
      })
      .catch(err => {
        console.log(err + ' && Ошибка при получении данных пользователя')
      })
  }, [])
  // useEffect(() => {
  //   Promise.all([api.getUserData(), api.getCards()])
  //     .then(([userData, cardsData]) => {
  //       setUserData(userData)
  //       console.log('============')
  //       console.log(cardsData)
  //       setCardsData(cardsData)
  //     })
  //     .catch(err => {
  //       console.log(err + ' && Ошибка при получении данных пользователя / Ошибка при получении карточек')
  //     })
  // }, [])
  function handleCardLike(card) {
    console.log('Клик по лайку============')
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id)
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.switchLike(card._id, isLiked).then(newCard => {
      // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
      const newCards = cardsData.map(c => (c._id === card._id ? newCard : c))
      // Обновляем стейт
      setCardsData(newCards)
    })
  }
  return (
    <main>
      <section className='profile'>
        <button
          onClick={props.onEditAvatar}
          className='profile__avatar-btn'
          style={
            userData
              ? {
                  backgroundImage: `url(${userData.avatar})`
                }
              : null
          }></button>
        <div className='profile__info'>
          <h1 className='profile__name'>{userData ? userData.name : 'Имя пользователя'}</h1>
          <button onClick={props.onEditProfile} type='button' className='profile__edit-btn'>
            <img className='profile__edit-pic' src={editBtnImage} alt='Редактировать' />
          </button>
          <p className='profile__description'>{userData ? userData.about : 'Описание'}</p>
        </div>
        <button onClick={props.onAddPlace} type='button' className='profile__add-btn'></button>
      </section>
      <section className='cards'>
        {cardsData
          ? cardsData.map((card, idx) => {
              return (
                <Card
                  onCardClick={cardData => {
                    props.onCardClick(cardData)
                    props.onOverviewPopup()
                  }}
                  onCardLike={() => {
                    handleCardLike(cardsData[idx])
                  }}
                  cardData={card}
                  key={card._id}
                />
              )
            })
          : null}
      </section>
    </main>
  )
}

export default Main
