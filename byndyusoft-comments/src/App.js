import React from 'react';/* 
import logo from './logo.svg'; */
import { useState } from 'react';
import './App.css';

import Article from './components/article/article'
import Form from './components/comment-form/form';
import CommentsList from './components/comments/commentsList/commentsList';

function App() {

  let [comments, setComments] = useState([{ id: 0, name: "", email: "", text: "wef", publicationTime: 1600616401986, rating: 0 }])

  /* Обновление списка комментариев для статьи */
  function updateComments(comment) {
    console.log("В стейте сохранён новый комментарий: ", comment)
    console.log("Список комментариев, сохранённых в стейте: ", comments)

    let temp = []
    temp = [...comments]
    temp.push(comment)
    setComments([...temp])
  }

  /* FIXME: добится автоматического обновления пройденного времени для комментария, с момента его публикации */

  /* Если кто-либо из ныне живущих, в прочтении кода дойдёт до этого момента, то перед дальнейшим прочтением я хотел бы принести ему свои искренние извинения и попросить не пытаться меня найти с целью расправы и всяческого унижения меня и моей личности. Пожалуйста, имейте ввиду что я был морально сломлен, изничтожен и пошёл на эти крайние меры (написании функций подобных updateCommentRating) будучи в глубоком отчаянии.
  Если же этот человек всё же попытается найти меня и избавить меня и этот мир от страданий, то найти он меня может либо по адресу ул. Пушкина д. Колотушкина кв. под номером 7, либо, что более вероятно, в центральной психоневрологической больнице, в отделении для больных с тяжёлыми и затяжными психозами. Надеюсь на ваш гуманизм.
  Взыщи, Господи душу погибшего и охлади его траханье */

  /* понимаю, что подход к реализацию этого функционала должен быть иным. Возможно, экшены были бы наилучшим вариантом */
  function updateCommentRating(commentId, sign) {
    /* создаю копию стейта с комментариями */
    let temp = [...comments]

    for (let i = 0; i < temp.length; i++) {
      if (temp[i]["id"] == commentId){
        console.log("Найдено!",commentId ) 
        temp[i]["rating"] = (sign?temp[i]["rating"]+1: temp[i]["rating"]-1 ) 
      }
    }
    setComments(temp)
  }

  return (
    <div className="App">
      <div className="container">
        <Article></Article>

        {/* FIXME: поправить небольшой баг вёрстки: добавить отступ сверху для формы. (перекрытие шапки формы) */}
        <Form
          update={updateComments}
        />
        
        <CommentsList
          comments={comments}
          updateCommentRating={updateCommentRating}></CommentsList>
      </div>


    </div>
  );
}

export default App;
