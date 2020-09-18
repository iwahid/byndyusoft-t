import React from 'react'
import { useState } from 'react';

function Form(props) {

  let [content, setContent] = useState({ name: "", email: "" })

  /* TODO:
    1. в объекте состояния добавить свойства для текста комментария
    2. вынести хуки в компонент листа комментариев и реализовать подъём состояния
    3. не забыть про пропсы и создание отдельного объекта комментария*/
  function handleChange(event) {
    setContent({name: event.target.value})
    console.log(content)
  }

  function handleSubmit(event) {
    console.log('Попытка отправить данные ' + event.target.value);
    event.preventDefault();
    console.log(content)
  }

  /* TODO: что бы не забыть: для работы с формой, в компонент необходимо внедрить состояние. На изменения формы навешать обработчиков, которые будут менять состояние компонента. */

  return (
    <form className="add-comment" onSubmit={(event) => handleSubmit(event)}>
      <p className="add-comment__title">Добавить комментарий</p>
      <div className="add-comment__field">
        <label className="add-comment__label" for="input1">Имя: </label>
        <input type="text" id="input1" value={content.name} onChange={(event) => handleChange(event)} />
      </div>
      <div className="add-comment__field">
        <label className="add-comment__label" for="input2">E-mail</label>
        <input type="text" id="input2" value={content.email} onChange={(event) => handleChange(event)} />
      </div>
      <div className="add-comment__field">
        <label className="add-comment__label" for="textarea">Текст комментария</label>
        <textarea className="add-comment__textarea" name="" id="textarea" rows="5"></textarea> {/* габариты текстового поля можно задать как через атрибуты, так и в css */}
      </div>
      <input className="add-comment__submit" type="submit" value="Добавить комментарий" />
    </form>
  )
}

export default Form
