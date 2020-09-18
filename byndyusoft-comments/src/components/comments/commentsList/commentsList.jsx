import React from 'react'
import CommentItem from '../commentItem/commentItem'

function CommentsList() {
  return (
    <div className="comments-list">
      <h3 className="comments-list__title">Комментарии:</h3>
      <div className="comments-list__inner">
      <CommentItem></CommentItem>
      
      <CommentItem></CommentItem>
      
      <CommentItem></CommentItem>
      </div>
    </div>
  )
}

export default CommentsList
