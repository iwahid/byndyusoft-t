import React from 'react';/* 
import logo from './logo.svg'; */
import { useState } from 'react';
import './App.css';

import Article from './components/article/article'
import Form from './components/comment-form/form';
import CommentsList from './components/comments/commentsList/commentsList';

function App() {

  let [comments, setComments] = useState([{a:1}])

  function updateComments (index) {
    console.log("Получено значение: ", index, "Его тип: ", typeof index)
    
    console.log("Получено значение comments: ", comments, "Его тип: ", Array.isArray(comments) )
    let temp = []
    temp = [...comments]
    temp.push(index)
    setComments([...temp])


    console.log("Значение стейта: ", comments)
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
        comments={comments}></CommentsList>
      </div>


    </div>
  );
}

export default App;
