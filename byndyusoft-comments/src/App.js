import React from 'react';/* 
import logo from './logo.svg'; */
import './App.css';

import Article from './components/article/article'
import CommentsList from './components/comments/commentsList/commentsList';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Article></Article>


        <CommentsList></CommentsList>
      </div>
      {/*     <img src={logo} className="App-logo" alt="logo" /> */}



    </div>
  );
}

export default App;
