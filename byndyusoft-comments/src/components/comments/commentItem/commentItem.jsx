import React from 'react'
import { useState, useEffect } from 'react'
import Rating from '../rating/rating'
import Avatar from './assets/avatar.png'

function CommentItem({ comment, updateCommentRating }) {

  let [commentVisisble, setCommentVisisble] = useState(true)

  useEffect(() => {
    ((-10 < comment.rating)?setCommentVisisble(true):setCommentVisisble(false))
   
  }, [comment.rating])



  /* Функция подсчёта времени, пройденного с момента публикации 
     TODO: возможно, эту функцию стоит вынести в отдельный компонент*/

  function calcCommentDate(time) {

    /* определяю разницу между указанной датой публикации и текущим моментом */
    let timePassed = Date.now() - time

    let msInMinute = 60 * 1000
    let msInHour = 60 * 60 * 1000
    let msInDay = 60 * 60 * 1000 * 24

    let result = {}

    /* FIXME: удалить логи от отладки */
    if (timePassed > msInDay) {
      result = correctName(Math.round(timePassed / 60 / 60 / 1000 / 24), ["День", "Дня", "Дней"])
      console.log("Прошло: ", result)
    } else if (timePassed > msInHour) {
      result = correctName(Math.round(timePassed / 60 / 60 / 1000), ["Час", "Часа", "Часов"])
      console.log("Прошло: ", result)
    } else if (timePassed > msInMinute) {
      result = correctName(Math.round(timePassed / 60 / 1000), ["Минуту", "Минуты", "Минут"])
      console.log("Прошло: ", result)
    } else {
      result = correctName(Math.round(timePassed / 1000), ["Секунду", "Секунды", "Секунд"])
      console.log("Прошло: ", result)
    }

    /* TODO: вернуть ссылку на объект с временем и корректным текстом.*/

    function correctName(timePassed, titlesArr) {

      let rest = timePassed % 100
      let result = { timePassed }

      if (5 <= rest && rest <= 20) {
        result.rest = titlesArr[2]
      } else if (1 < (rest % 10) && (rest % 10) < 5) {
        result.rest = titlesArr[1]
      } else if (1 == (rest % 10)) {
        result.rest = titlesArr[0]
      } else {
        result.rest = titlesArr[2] /* на случай, когда количество секунд окажется кратным 10 */
      }
      return result

    }
    return `${result.timePassed} ${result.rest} назад` /* значение, подставляемое в поле даты публикации комментария */
  }

  return (
    <div className={"comment"}>
      <div className="comment__author-avatar">
        <img src={Avatar} alt={"props.author"} /> {/* TODO: заменить на действительный пропс */}
      </div>
      <div className="comment__body">
        <div className="comment__top">

          <a href="#" className="comment__author">{comment.name}</a>
          <span className="comment__publication-date">{calcCommentDate(comment.publicationTime)}</span>
          <div className="comment__rating">
            {/* TODO:  данные рейтинга*/}

            <Rating
              rating={comment.rating}
              commentId={comment.id}
              updateCommentRating={updateCommentRating} />
          </div>

          <button className="comment__reply-link" type="button" >Ответить</button>

        </div>
        {commentVisisble ? <p className="comment-text">{comment.text}</p>: <button className="comment__show-text" onClick={() => setCommentVisisble(true)}>Открыть комментарий</button> }

        {/* TODO: возможно, здесь нужно будет реализовать контейнер для ответов оставленных на этот коммент */}
      </div>

    </div>
  )
}

export default CommentItem
