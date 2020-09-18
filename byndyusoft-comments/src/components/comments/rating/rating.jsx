import React from 'react'

function Rating() {
  return (
    /* могу не использовать доп. классы для внутренних элементов, поскольку внутренняя структура не вариативна. Проще определять через каскад & {} */
    <div className="rating"> 
      <button type={"button"}>+</button>
      <span>+5</span> {/* TODO: подумать над семантически наиболее корректным тегом */}
      <button type={"button"}>-</button>
    </div>
  )
}

export default Rating
