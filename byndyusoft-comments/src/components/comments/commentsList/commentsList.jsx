import React from 'react'
import CommentItem from '../commentItem/commentItem'

function CommentsList({comments}) {
  return (
    <div className="comments-list">
      <h3 className="comments-list__title">Комментарии:</h3>
      <div className="comments-list__inner">

      {comments.map((comment) => <CommentItem comment={comment}/>)}
      </div>
    </div>
  )
}

export default CommentsList
