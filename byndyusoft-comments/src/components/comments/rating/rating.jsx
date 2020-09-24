import React from 'react'

function Rating({ rating, commentId, updateCommentRating }) {
 
  return (
    /* могу не использовать доп. классы для внутренних элементов, поскольку внутренняя структура не вариативна. Проще определять через каскад & {} */
    <div className="rating">
      <button type={"button"} onClick={() => updateCommentRating(commentId, false)}>-</button>
      <span>{rating}</span> {/* TODO: подумать над семантически наиболее корректным тегом */}
      <button type={"button"} onClick={() => updateCommentRating(commentId, true)}>+</button>
    </div>
  )
}

export default Rating
