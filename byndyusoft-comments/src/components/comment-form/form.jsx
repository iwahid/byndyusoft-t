import React from 'react'
import { useState } from 'react';

function Form(props) {

  /* хук для создаваемого комментария */
  let [content, setContent] = useState({ name: "", email: "", text: "", publicationTime: "", rating: 0 })

  
  /** @description Управляемый компонент. Сохранение содержимого формы в хуках
   * @param {object} event произошедшее событие
   * @param {string} key ключ, определяющий класс передаваемых данных (имя, email, текст комментария....)
   */
  function handleChange(event, key) {
    let temp = { ...content }
    temp[key] = event.target.value

    /* запись о времени публикации комментария */
    temp["publicationTime"] = Date.now()
    /* генерация уникального id, в соответствии со стандартом RFC 4122 */
    temp["id"] = function (a, b) { for (b = a = ''; a++ < 36; b += a * 51 & 52 ? (a ^ 15 ? 8 ^ Math.random() * (a ^ 20 ? 16 : 4) : 4).toString(16) : '-'); return b }() /* уникальный id */
    temp["rating"] = 0
    setContent({ ...temp })

    /* NOTE: отсатётся вопрос о моменте валидации формы. Проводить валидацию в момент ввода данных в поля, благодаря чему можно будет добавить функционал отображающий ошибки заполнения полей в текущем времени, но при этом на каждый символ вызвывать функцию
    Либо валидировать перед отправкой, но тогда сообщения об ошибочно заполненных полях пользователь увидит лишь в самом конце (это заставит пользователя вернуться, например, к редактированию поля с email, при заполнении которого он дуопустил ошибку) */
    formValidate(event.target.id, event.target.value)
  }


  /* хук состояния валидации всех инпутов форме */
  let [formIsValid, setFormIsValid] = useState({ name: false, email: false, text: false })


  /* NOTE: функцию можно было бы вынести в отдельный файл, для того что бы импортировать её в отдельные компоненты (статьи, комментарии, посты и прочее). Но по ТЗ требуется только блок с комментариями. Выносить отдельно не стал */
   /** @description Функция валидации формы
   * @param {string} fieldId поле, требующее валидации
   * @param {string} fieldValue значение в поле, проходящее валидацию
   */
  function formValidate(fieldId, fieldValue) {
    switch (fieldId) {
      case 'author-name':
        setFormIsValid((formIsValid) => (fieldValue.length > 1 ? { ...formIsValid, name: true } : { ...formIsValid, name: false }))
        break;
      case 'author-text':
        setFormIsValid((formIsValid) => (fieldValue.length > 1 ? { ...formIsValid, text: true } : { ...formIsValid, text: false }))
        break;
      case 'author-email':
        setFormIsValid((formIsValid) => (
          (function isEmail(email) {
            return /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test(email)
          })(content.email)
            ? { ...formIsValid, email: true }
            : { ...formIsValid, email: false }))
        break;
      default:
        break;
    }
  }

  /** @description Отправка формы (лишь имитирует отправку, но никуда ничего не отправляет, а только изменяет состояние)
   * @param {object} event событие отправки формы
   */
  function handleSubmit(event) {

    if (formIsValid.name && formIsValid.email && formIsValid.text) {
      props.updateCommentsList(content)
      /* очистка состояния формы и её состояния*/
      setFormIsValid({ name: false, email: false, text: false })
      setContent({ name: "", email: "", text: "", publicationTime: "" })
    }

    event.preventDefault();
  }

  return (
    <form className="add-comment" onSubmit={(event) => handleSubmit(event)}>
      <p className="add-comment__title">Добавить комментарий</p>
      <div className="add-comment__field">
        <label className="add-comment__label" for="author-name">Имя: </label>
        <input type="text" id="author-name" value={content.name} onChange={(event) => handleChange(event, "name")} />
      </div>
      <div className="add-comment__field">
        <label className="add-comment__label" for="author-email">E-mail</label>
        <input type="text" id="author-email" value={content.email} onChange={(event) => handleChange(event, "email")} />
      </div>
      <div className="add-comment__field">
        <label className="add-comment__label" for="author-text">Текст комментария</label>
        <textarea className="add-comment__textarea" id="author-text" rows="5" value={content.text} onChange={(event) => handleChange(event, "text")}></textarea> {/* габариты текстового поля можно задать как через атрибуты, так и в css */}
      </div>
      <input className="add-comment__submit" type="submit" value="Добавить комментарий" />
    </form>
  )
}

export default Form
