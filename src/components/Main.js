import React from 'react'
import editBtnImage from '../images/profile/profile__edit-btn.svg'
import { api } from '../utils/api'
import Card from './Card'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function Main(props) {
  const cardsData = props.cardsData
  const currentUser = React.useContext(CurrentUserContext)
  function handleCardLike(card) {
    // Проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id)
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.switchLike(card._id, isLiked).then(newCard => {
      // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
      const newCards = cardsData.map(c => (c._id === card._id ? newCard : c))
      // Обновляем стейт
      props.updCardsData(newCards)
    })
  }
  function handleCardDelete(card) {
    api.removeCard(card._id).then(() => {
      api.getCards().then(props.updCardsData)
    })
  }
  return (
    <main>
      <section className='profile'>
        <button
          onClick={props.onEditAvatar}
          className='profile__avatar-btn'
          style={
            currentUser
              ? {
                  backgroundImage: `url(${currentUser.avatar})`
                }
              : null
          }></button>
        <div className='profile__info'>
          <h1 className='profile__name'>{currentUser ? currentUser.name : 'Имя пользователя'}</h1>
          <button onClick={props.onEditProfile} type='button' className='profile__edit-btn'>
            <img className='profile__edit-pic' src={editBtnImage} alt='Редактировать' />
          </button>
          <p className='profile__description'>{currentUser ? currentUser.about : 'Описание'}</p>
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
                  onCardDelete={() => {
                    handleCardDelete(cardsData[idx])
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
