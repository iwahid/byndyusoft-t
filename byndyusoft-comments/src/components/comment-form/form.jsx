import React from 'react'
import { useState } from 'react';

function Form(props) {

  /* хук комментария */
  let [content, setContent] = useState({ name: "", email: "", text: "", publicationTime: "", rating: 0 })

  /* TODO:
    1. в объекте состояния добавить свойства для текста комментария
    2. вынести хуки в компонент листа комментариев и реализовать подъём состояния
    3. не забыть про пропсы и создание отдельного объекта комментария
    4. добавить время публикации*/

  /* TODO: привязать проверку на валидность перед отправкой комментария */
  function handleChange(event, key) {
    let temp = { ...content }
    temp[key] = event.target.value

    /* запись о времени публикации комментария */
    temp["publicationTime"] = Date.now() /* NOTE: понять, почему значение времени не сохраняется при отправке формы */
    temp["id"] = function(a,b){for(b=a='';a++<36;b+=a*51&52?(a^15?8^Math.random()*(a^20?16:4):4).toString(16):'-');return b}() /* уникальный id */
    temp["rating"] = 0
   /*  temp['parrent'] =  */
    setContent({ ...temp })
    console.log(content)
  }

  /* FIXME: очистить поля после отправки комментария */
  function handleSubmit(event) {
    let temp = { ...content }
    setContent({ ...temp })


    console.log("Данные нового комментария: ", content)
    props.update(content)
    event.preventDefault();
    /* очистка формы. Можно было бы вынести в отдеьную функцию и циклом пройдя по всем ключам объекта состояния присвоить им "". Но для текущей задачи достаточно очистки в одну строку */
    setContent({ name: "", email: "", text: "", publicationTime: "" })
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
