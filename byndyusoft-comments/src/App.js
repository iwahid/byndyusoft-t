import React from 'react';
import { useState } from 'react';
import Article from './components/article/article'
import CommentsList from './components/comments/commentsList/commentsList';

/* Оставь надежду, всяк сюда входящий */

function App() {
  /* список всех комментариев */
  let [comments, setComments] = useState([{
    id: "66326385-62c0-404f-ac6a-3d03d478801a",
    name: "Sofia",
    email: "ycohapass-2104@yopmail.com",
    text: "Beatae recusandae nesciunt dolorum et, unde blanditiis, itaque voluptatem distinctio id sapiente deserunt consectetur exercitationem quo tempora vitae, est saepe nisi aliquid sunt magni repellendus voluptatum facilis ipsum voluptatibus. Magni, harum! Cumque, ea ipsa consequatur exercitationem, illum eaque velit at officia esse aperiam consectetur? ",
    publicationTime: 1600016401986,
    rating: 5,
    depthOfAnswers: 1,
    reply: [
      {
        id: "b8b28242-456b-47d5-bf7b-c9599a880611",
        name: "Brook",
        email: "ofylaludd-2368@yopmail.com",
        text: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, ad explicabo? Recusandae porro impedit temporibus, perspiciatis animi ratione nesciunt aperiam libero vitae. Voluptatem suscipit provident cumque adipisci inventore commodi aspernatur. Repellat ducimus numquam alias et ratione odio dolores quos error, vel, dolor mollitia id iusto nisi fugiat, cum obcaecati excepturi pariatummodi aspernatur. Repellat ducimus numquam alias et ratione odio dolores quos error, vel, dolor mollitia id iusto nisi fugiat, cum obcaecati excepturi pariatur!",
        publicationTime: 1600616401986,
        rating: 3,
        depthOfAnswers: 2,
        reply: [
          {
            id: "7ae3100f-a255-4a79-90c8-6205bd49cfa2",
            name: "Amelie",
            email: "wovadyppi-5014@yopmail.com",
            text: "Repellat ducimus numquam alias et ratione odio dolores quos error, vel, dolor mollitia id iusto nisi fugiat, cum obcaecati excepturi pariatur! Nostrum quibusdam animi quo officia, soluta iste recusandae similique ipsum suscipit natus tempora ea rem exercitationem amet doloremque sint nulla nisi eum debitis? Iste in autem nemo, animi sed laudant",
            publicationTime: 1600816411986,
            rating: 7,
            depthOfAnswers: 3
          }
        ]
      },
      {
        id: "841f6f9b-e797-441a-b472-823332fc2994",
        name: "Emma",
        email: "sudappobade-2120@yopmail.com",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus deleniti natus doloribus run deserunt, ea quos et explicabo fugit impedit cumque voluptatem amet commodi a iste, quod suscipit alias minus qui, reprehenderit incidunt temporibus hic minima? Ad placeat sapiente et nobis quas modi, omnis quos eum a repellendus adipisci. ",
        publicationTime: 1600216401986,
        rating: 2,
        depthOfAnswers: 2,
        reply: [
          {
            id: "ec6de4fe-1835-4abe-bdd8-7de45a7106dc",
            name: "Maddison",
            email: "kirenakyhy-5861@yopmail.com",
            text: "Numquam alias et ratione odio dolores quos error, vel, dolor mollitia id iusto nisi fugiat, cum obcaecati excepturi pariatur! Nostrum quibusdam animi quo officia, soluta iste recusandae similique ipsum suscipit natus temficia, soluta iste recusandae similique ipsum suscipit natus tempora ea rem exercitationem amet doloremque sint nulla nisi eum debitis? Iste in autem nemo, animi sed laudant doloremque",
            publicationTime: 1600316401986,
            rating: 7,
            depthOfAnswers: 3
          }
        ]
      }
    ]
  },
  {
    id: "65414850-4d07-4108-8ae7-8ff67a2b26a8",
    name: "Erin",
    email: "etatteji-4447@yopmail.com",
    text: "utem nemo, animi sed laudant Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laboriosam ullam eum et sapiente alias sint dolor. Veritatis ad commodi facere accusantium sunt ex porro, molestiae, praesentium eaque ducimus velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem adipisci fuga doloribus tenetur blanditiis, ipsam quas tempo",
    publicationTime: 1600406401986,
    rating: 5,
    depthOfAnswers: 1,
    reply: [
      {
        id: "25e59951-c1a7-4e19-ae6e-b7d78e140fb8",
        name: "Paige",
        email: "oficeddut-3119@yopmail.com",
        text: "qui, reprehenderit incidunt temporibus hic minima? Ad placeat sapiente et nobis quas modi, omnis quos eum a repellendus adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati exercitationem dignissimos reprehenderit eligendi excepturi ex nulla eius officiis eos esse cumque, reiciendis nesciunt earum aspernatur vero, officia vel, repellat corrupti.",
        publicationTime: 1600416401986,
        rating: 5,
        depthOfAnswers: 2

      }
    ]
  },
  {
    id: "ebd84928-5171-4feb-b94f-198f6f2ae1a5",
    name: "Lidia",
    email: "kowatarri-3801@yopmail.com",
    text: "nimi sed laudant Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laboriosam ullam eum et sapiente alias sint dolor. Veritatis ad commodi facere accusantium sunt ex porro, molestiae, praesentium eaque ducimus velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem adipisci fuga doloribus",
    publicationTime: 1600516401986,
    rating: 0,
    depthOfAnswers: 1
  }])

  /* хук - ссылка на тот комментарий, к которому будет написан ответ */
  let [replyParent, setReplyParent] = useState(0)


  /** @description Обновление списка комментариев для статьи.
    * @param {object} comment объект, содержащий в себе данные для создания комментария
    */
  function updateComments(comment) {

    /* копирую, а не мутирую объект для того, что бы в конце корректно оповестить react о произошедших изменениях */
    let temp = [...comments]

    /* комментарий непосредственно к статье */
    if (replyParent == 0) {
      comment["depthOfAnswers"] = 1
      temp.push(comment)
      setComments([...temp])
      return
    }

    updateCommentReply(replyParent)

    /** @description ответ на комментарий.
      * @param {number} replyParent Id комментария, на который даётся ответ
      */
    function updateCommentReply(replyParent) {
      (function func(temp) {
        for (let elem of temp) {
          if (elem["id"] == replyParent) {
            if (!elem["reply"])/* чекаю существуют ли уже ответы у текущего комментария. Если нет, то формирую список */
              elem["reply"] = []
            comment["depthOfAnswers"] = elem["depthOfAnswers"] + 1 /* добавляю к комментарию глубину его вложенности на основе его родителя */
            elem["reply"].push(comment)
          } else if (elem['reply']) {
            func(elem['reply']);
          }
        }
      })(temp);
    }

    setComments([...temp])
    /* возврат формы ответа к статье */
    setReplyParent(0)
  }

  /* понимаю, что подход к реализации этого функционала должен быть иным. Но в данном проекте я планировал реализовать всё на хуках, в силу невысоких требований. */

  /** @description Обновление рейтинга у комментария
    * @param {number} commentId Id комментария, на который даётся ответ
    * @param {boolean} sign флаг true/false, говорящий о том, что бы увеличить или уменьшить рейтинг 
    */
  function updateCommentRating(commentId, sign) {
    /* создаю копию стейта с комментариями */
    let temp = [...comments]
    /* рекурсивный поиск нужного комментария */
    updateRating(commentId, sign)

    function updateRating(commentId, sign) {

      (function func(temp) {

        for (let elem of temp) {
          if (elem["id"] == commentId) {
            elem["rating"] += sign ? 1 : -1;
            console.log(`Рейтинг комментария автора "${elem.name}" изменился: ${elem["rating"]}`);
          } else if (elem['reply']) {
            func(elem['reply']);
          }
        }

      })(temp);
    }
    setComments(temp)
  }

  return (
    <div className="App">
      <div className="container">
        <Article></Article>
        <CommentsList
          comments={comments} /* список всех комментариев */
          updateCommentRating={updateCommentRating} /* обновление рейтинга комментария */
          setReplyParent={setReplyParent} /* выбор комментария по id, на который планируется отвечать */
          updateCommentsList={updateComments} /* добавление комментария в список */
          replyParent={replyParent}/* передача в форму id того комментария, который был выбран для ответа. Для того, что бы после него отрендерить форму */
        ></CommentsList>
      </div>
    </div>
  );
}

export default App;