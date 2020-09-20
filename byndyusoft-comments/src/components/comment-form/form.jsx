import React from 'react'
import { useState } from 'react';

function Form(props) {

  let [content, setContent] = useState({ name: "", email: "", text: "" })
  /* TODO: при первом рендере поднимать данные о состоянии, для первого рендеринга списка комментариев */

  /* TODO:
    1. в объекте состояния добавить свойства для текста комментария
    2. вынести хуки в компонент листа комментариев и реализовать подъём состояния
    3. не забыть про пропсы и создание отдельного объекта комментария
    4. добавить время публикации*/

  let tempDate = new Date
  /* TODO: привязать проверку на валидность перед отправкой комментария */
  function handleChange(event, key) {
    let temp = { ...content }
    temp[key] = event.target.value
    setContent({ ...temp })
    console.log(content)
    /*  setState({...state, [property]: value}) */
  }

  /* FIXME: очистить поля после отправки комментария */
  function handleSubmit(event) {
    props.update(content)
    event.preventDefault();

    /* очистка формы. Можно было бы вынести в отдеьную функцию и циклом пройдя по всем ключам объекта состояния присвоить им "". Но для текущей задачи достаточно очистки в одну строку */
    setContent({ name: "", email: "", text: "" })
    calcCommentDate(tempDate)
  }



  /* компонент подсчёта времени, пройденного с момента публикации */
  function calcCommentDate(time) {

    let timePassed = Date.now() - time

    let msInMinute = 60 * 1000
    let msInHour = 60 * 60 * 1000
    let msInDay = 60 * 60 * 1000 * 24

    let result

    if (timePassed > msInDay) {
      result = correctName(Math.round(timePassed / 60 / 60 / 1000 / 24), ["День", "Дня", "Дней"])
      console.log("Прошло: ", result)
    } else if (timePassed > msInHour) {
      result = correctName(Math.round(timePassed / 60 / 60 / 1000), ["Час", "Часа", "Часов"])
      console.log("Прошло: ", result)
    } else if (timePassed > msInMinute) {
      result = correctName(Math.round(timePassed / 60 / 1000), ["Минута", "Минуты", "Минут"])
      console.log("Прошло: ", result)
    } else {
      result = correctName(Math.round(timePassed / 1000), ["Секунда", "Секунды", "Секунд"])
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

  }


  return (
    <form className="add-comment" onSubmit={(event) => handleSubmit(event)}>
      <p className="add-comment__title">Добавить комментарий</p>
      <div className="add-comment__field">
        <label className="add-comment__label" for="input1">Имя: </label>
        <input type="text" id="input1" value={content.name} onChange={(event) => handleChange(event, "name")} />
      </div>
      <div className="add-comment__field">
        <label className="add-comment__label" for="input2">E-mail</label>
        <input type="text" id="input2" value={content.email} onChange={(event) => handleChange(event, "email")} />
      </div>
      <div className="add-comment__field">
        <label className="add-comment__label" for="textarea">Текст комментария</label>
        <textarea className="add-comment__textarea" id="textarea" rows="5" value={content.text} onChange={(event) => handleChange(event, "text")}></textarea> {/* габариты текстового поля можно задать как через атрибуты, так и в css */}
      </div>
      <input className="add-comment__submit" type="submit" value="Добавить комментарий" />
    </form>
  )
}

export default Form
