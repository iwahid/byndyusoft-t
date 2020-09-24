import React from 'react'
import CommentItem from '../commentItem/commentItem'
import CommentForm from './../../comment-form/form'

function CommentsList({ comments, updateCommentRating, setReplyParent, updateCommentsList, replyParent }) {

  return (
    <div className="comments-list">
      <h3 className="comments-list__title">Комментарии:</h3>
      <div className="comments-list__inner">
        {comments.map((comment) =>
          <CommentItem
            comment={comment}
            updateCommentRating={updateCommentRating}
            setReplyParent={setReplyParent}
            updateCommentsList={updateCommentsList} /* для формы */
            replyParent={replyParent}
          ></CommentItem>
        )}
      </div>

      {/* когда изначально комментарий пишется для статьи, а не в качестве ответа на уже существующий комментарий */}
      {replyParent == 0 ? <CommentForm updateCommentsList={updateCommentsList}></CommentForm> : ""}
    </div>
  )
}

export default CommentsList
