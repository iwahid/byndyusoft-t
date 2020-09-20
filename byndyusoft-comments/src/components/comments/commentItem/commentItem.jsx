import React from 'react'
import Rating from '../rating/rating'
import Avatar from './assets/avatar.png'

function CommentItem({ comment }) {


  
  return (
    <div className={"comment"}>
      <div className="comment__author-avatar">
        <img src={Avatar} alt={"props.author"} /> {/* TODO: заменить на действительный пропс */}
      </div>
      <div className="comment__body">
        <div className="comment__top">

          <a href="#" className="comment__author">{comment.name}</a>
          <span className="comment__publication-date">Час назад</span>
          <div className="comment__rating">
            {/* TODO:  данные рейтинга*/}

            <Rating />
          </div>

          <button className="comment__reply-link" type="button" >Ответить</button>

        </div>
        <p className="comment-text">{comment.text}</p>
        {/* TODO: возможно, здесь нужно будет реализовать контейнер для ответов оставленных на этот коммент */}
      </div>

    </div>
  )
}

export default CommentItem
