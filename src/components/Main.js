import React, { useEffect, useState } from 'react'
import editBtnImage from '../images/profile/profile__edit-btn.svg'
import Api from '../utils/api'
import Card from './Card'

function Main(props) {
  const [userData, setUserData] = useState(null)
  const [cardsData, setCardsData] = useState([])
  useEffect(() => {
    Api.getUserData()
      .then(data => {
        setUserData(data)
      })
      .catch(err => {
        console.log(err + ' && ' + 'Ошибка при получении данных пользователя')
      })
    Api.getCards()
      .then(cardsData => {
        setCardsData(cardsData)
      })
      .catch(err => {
        console.log(err + ' && ' + 'Ошибка при получении карточек')
      })
  }, [])
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
