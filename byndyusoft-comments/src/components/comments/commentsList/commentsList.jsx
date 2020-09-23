import React from 'react'
import CommentItem from '../commentItem/commentItem'

function CommentsList({ comments, updateCommentRating, getReplayParent }) {

  function myfunc(item) {
    console.log(item)
  }

  return (
    <div className="comments-list">
      <h3 className="comments-list__title">Комментарии:</h3>
      <div className="comments-list__inner">
        {comments.map((comment) =>
          <CommentItem
            comment={comment}
            updateCommentRating={updateCommentRating}
            getReplayParent={getReplayParent}
          ></CommentItem>
        )}

      </div>
    </div>
  )
}

export default CommentsList
