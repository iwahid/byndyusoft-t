import React from 'react'
import Rating from '../rating/rating'
import Avatar from './assets/avatar.png'

function CommentItem() {
  return (
    <div className={"comment"}>
      <div className="comment__author-avatar">
      <img src={Avatar} alt={"props.author"}/> {/* TODO: заменить на действительный пропс */}
      </div>
      <div className="comment__body">
        <div className="comment__top">

          <a href="#" className="comment__author">Sebastian Pereira</a>
          <span className="comment__publication-date">Час назад</span>
          <div className="comment__rating">
            {/* TODO: реализовать счётчик рейтинга */}
         
            <Rating />
          </div>

          <button className="comment__reply-link" type="button" >Ответить</button>

        </div>
        <p className="comment-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laudantium, suscipit adipisci cupiditate maiores impedit deleniti quas neque doloribus a. Quae minima perferendis porro illo dolorem maxime vero nemo aperiam.
        </p>
        {/* TODO: возможно, здесь нужно будет реализовать контейнер для ответов оставленных на этот коммент */}
      </div>

    </div>
  )
}

export default CommentItem
