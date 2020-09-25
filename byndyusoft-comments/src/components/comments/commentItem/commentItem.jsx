import React from 'react'
import { useState, useEffect } from 'react'
import Rating from '../rating/rating'
import Avatar from './assets/avatar.png'
import CommentForm from './../../comment-form/form'

 /** @description Подсчёт времени, пройденного с момента публикации комментария
    * @param {number} time время публикации комментария в ms
    * @returns {string} значение, подставляемое в поле даты публикации комментария 
    */
function CommentItem({ comment, updateCommentRating, setReplyParent, updateCommentsList, replyParent }) {

  /* видимость по рейтингу */
  let [commentVisisble, setCommentVisisble] = useState(true)
  /* сокрытие ответов */
  let [answersVisible, setAnswersVisible] = useState(true)

  {/* 4 - ограничение на уровень вложенности комментариев */ }
  let depthLimitation = 4

  useEffect(() => {
    ((-10 < comment.rating) ? setCommentVisisble(true) : setCommentVisisble(false))
  }, [comment.rating])

  /* NOTE: возможно, эту функцию стоит вынести в отдельный компонент, но думаю это было бы лишним в рамках текущей задачи*/
  /** @description Подсчёт времени, пройденного с момента публикации комментария
    * @param {number} time время публикации комментария в ms
    * @returns {string} значение, подставляемое в поле даты публикации комментария 
    */
  function calcCommentDate(time) {

    let timePassed = Date.now() - time

    let msInMinute = 60 * 1000
    let msInHour = 60 * 60 * 1000
    let msInDay = 60 * 60 * 1000 * 24

    let result = {}

    if (timePassed > msInDay) {
      result = correctName(Math.round(timePassed / 60 / 60 / 1000 / 24), ["день", "дня", "дней"])
    } else if (timePassed > msInHour) {
      result = correctName(Math.round(timePassed / 60 / 60 / 1000), ["час", "часа", "часов"])
    } else /* if (timePassed > msInMinute) */ { /* расскоментировать, что бы заработал отчёт секунд. + заменить ceil на round */
      result = correctName(Math.ceil(timePassed / 60 / 1000), ["минуту", "минуты", "минут"])
    } /* else {
      result = correctName(Math.round(timePassed / 1000), ["Секунду", "Секунды", "Секунд"])
      // NOTE: в требованиях не было указано про секунды, но они были добавлены на этапе разработки для большей наглядности
    } */

    /** @description Подсчёт времени, пройденного с момента публикации комментария
      * @param {number} timePassed дельта, разница во времени между текущим моментов и моментом публикации комментария
      * @returns {array} массив слов, значения которого по условия подставляются в итоговое выражение. 
      */
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
    return `${result.timePassed} ${result.rest} назад`
  }

  return (
    <div className={"comment"}>
      <div className="comment__author-avatar">
        <img src={Avatar} alt={comment.name} />
      </div>
      <div className="comment__body">
        <div className="comment__top">
          <a href="#" className="comment__author">{comment.name}</a>
          <span className="comment__publication-date">{calcCommentDate(comment.publicationTime)}</span>
          <div className="comment__rating">
            <Rating
              rating={comment.rating}
              commentId={comment.id}
              updateCommentRating={updateCommentRating} />
          </div>

          <div className="comment__action-controls">

            {comment.depthOfAnswers < depthLimitation && comment.hasOwnProperty("reply")
              ? <button className="comment__hide-answers" type="button" onClick={() => setAnswersVisible((answersVisible) => !answersVisible)}>{answersVisible ? "Скрыть ответы" : "Показать ответы"}
              </button>
              : ""}
            {comment.depthOfAnswers < depthLimitation ? <button className="comment__reply-link" type="button" onClick={() => setReplyParent(comment.id)} >Ответить</button> : ""}

          </div>
        </div>

        {commentVisisble ? <p className="comment__text">{comment.text}</p> : <button className="comment__show-text" onClick={() => setCommentVisisble(true)}>Открыть комментарий</button>}

        {replyParent == comment.id ?
          <CommentForm
            updateCommentsList={updateCommentsList}
          ></CommentForm>
          : ""}

        {/* рекурсивный рендер ответов на комментарий */}
        {answersVisible
          ? (comment.reply && comment.reply.length
            ? comment.reply.map((comment) =>
              <div className="comment__reply">
                <CommentItem
                  comment={comment}
                  updateCommentRating={updateCommentRating}
                  setReplyParent={setReplyParent}
                  updateCommentsList={updateCommentsList}
                  replyParent={replyParent}
                />
              </div>)
            : ""
          )
          : ""}
      </div>
    </div>
  )
}

export default CommentItem
