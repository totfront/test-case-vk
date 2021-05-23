export default function Card(props) {
  function handleCardClick() {
    props.onCardClick(props.cardData)
  }
  return (
    <article className='card'>
      <div className='card__pic' onClick={handleCardClick} style={{ backgroundImage: `url(${props.cardData.link})` }}></div>
      <div className='card__inner'>
        <h3 className='card__heading'>{props.cardData.name}</h3>
        <div className='card__like'>
          <button className='card__like-btn'></button>
          <p className='card__like-counter'>{props.cardData.likes.length}</p>
        </div>
      </div>
      <button className='card__trash-btn'></button>
    </article>
  )
}
