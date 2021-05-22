import React from 'react'
import editBtnImage from '../images/profile/profile__edit-btn.svg'

function Main({ handleEditAvatarClick, handleEditProfileClick, handleAddPlaceClick }) {
  return (
    <main>
      <section className='profile'>
        <button onClick={handleEditAvatarClick} className='profile__avatar-btn'></button>
        <div className='profile__info'>
          <h1 className='profile__name'></h1>
          <button onClick={handleEditProfileClick} type='button' className='profile__edit-btn'>
            <img className='profile__edit-pic' src={editBtnImage} alt='Редактировать' />
          </button>
          <p className='profile__description'></p>
        </div>
        <button onClick={handleAddPlaceClick} type='button' className='profile__add-btn'></button>
      </section>
      <section className='cards'>
        <template id='template'>
          <article className='card'>
            <div className='card__pic'></div>
            <div className='card__inner'>
              <h3 className='card__heading'></h3>
              <div className='card__like'>
                <button className='card__like-btn'></button>
                <p className='card__like-counter'></p>
              </div>
            </div>
            <button className='card__trash-btn'></button>
          </article>
        </template>
      </section>
    </main>
  )
}

export default Main
