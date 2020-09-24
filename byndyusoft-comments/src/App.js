import React from 'react';
import { useState } from 'react';

/* компоненты */
import Article from './components/article/article'
import Form from './components/comment-form/form';
import CommentsList from './components/comments/commentsList/commentsList';

function App() {

  let [comments, setComments] = useState([{
    id: 1000,
    name: "Вася",
    email: "email_1",
    text: "Beatae recusandae nesciunt dolorum et, unde blanditiis, itaque voluptatem distinctio id sapiente deserunt consectetur exercitationem quo tempora vitae, est saepe nisi aliquid sunt magni repellendus voluptatum facilis ipsum voluptatibus. Magni, harum! Cumque, ea ipsa consequatur exercitationem, illum eaque velit at officia esse aperiam consectetur? ",
    publicationTime: 1600616401986,
    rating: 5,
    depthOfAnswers: 1,
    reply: [
      {
        id: 1,
        name: "name_1-1",
        email: "email_1-1",
        text: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, ad explicabo? Recusandae porro impedit temporibus, perspiciatis animi ratione nesciunt aperiam libero vitae. Voluptatem suscipit provident cumque adipisci inventore commodi aspernatur. Repellat ducimus numquam alias et ratione odio dolores quos error, vel, dolor mollitia id iusto nisi fugiat, cum obcaecati excepturi pariatummodi aspernatur. Repellat ducimus numquam alias et ratione odio dolores quos error, vel, dolor mollitia id iusto nisi fugiat, cum obcaecati excepturi pariatur!",
        publicationTime: 1600616401986,
        rating: 3,
        depthOfAnswers: 2,
        reply: [
          {
            id: 2,
            name: "",
            email: "",
            text: "Repellat ducimus numquam alias et ratione odio dolores quos error, vel, dolor mollitia id iusto nisi fugiat, cum obcaecati excepturi pariatur! Nostrum quibusdam animi quo officia, soluta iste recusandae similique ipsum suscipit natus tempora ea rem exercitationem amet doloremque sint nulla nisi eum debitis? Iste in autem nemo, animi sed laudant",
            publicationTime: 1600616411986,
            rating: 7,
            depthOfAnswers: 3
          }
        ]
      },
      {
        id: 3,
        name: "name_1-2",
        email: "email_1-2",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus deleniti natus doloribus run deserunt, ea quos et explicabo fugit impedit cumque voluptatem amet commodi a iste, quod suscipit alias minus qui, reprehenderit incidunt temporibus hic minima? Ad placeat sapiente et nobis quas modi, omnis quos eum a repellendus adipisci. ",
        publicationTime: 1600616401986,
        rating: 2,
        depthOfAnswers: 2,
        reply: [
          {
            id: 4,
            name: "name_1-2-1",
            email: "email_1-2-1",
            text: "Numquam alias et ratione odio dolores quos error, vel, dolor mollitia id iusto nisi fugiat, cum obcaecati excepturi pariatur! Nostrum quibusdam animi quo officia, soluta iste recusandae similique ipsum suscipit natus temficia, soluta iste recusandae similique ipsum suscipit natus tempora ea rem exercitationem amet doloremque sint nulla nisi eum debitis? Iste in autem nemo, animi sed laudant doloremque",
            publicationTime: 1600616401986,
            rating: 7,
            depthOfAnswers: 3
          }
        ]
      }
    ]
  },
  {
    id: 7,
    name: "name_2",
    email: "email_2",
    text: "utem nemo, animi sed laudant Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laboriosam ullam eum et sapiente alias sint dolor. Veritatis ad commodi facere accusantium sunt ex porro, molestiae, praesentium eaque ducimus velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem adipisci fuga doloribus tenetur blanditiis, ipsam quas tempo",
    publicationTime: 1600616401986,
    rating: 5,
    depthOfAnswers: 1,
    reply: [
      {
        id: 8,
        name: "name_2-1",
        email: "email_2-1",
        text: "qui, reprehenderit incidunt temporibus hic minima? Ad placeat sapiente et nobis quas modi, omnis quos eum a repellendus adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati exercitationem dignissimos reprehenderit eligendi excepturi ex nulla eius officiis eos esse cumque, reiciendis nesciunt earum aspernatur vero, officia vel, repellat corrupti.",
        publicationTime: 1600616401986,
        rating: 5,
        depthOfAnswers: 2,
        reply: [
          {
            id: 9,
            name: "name_2-1-1",
            email: "email_2-1-1",
            text: "inus qui, reprehenderit incidunt temporibus hic minima? Ad placeat sapiente et nobis quas modi, omnis quos eum a repellendus adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati exercitationem dignissimos reprehenderit eligendi excepturi ex nulla eius officiis eos esse cumque, reiciendis nesciunt earum aspernatur vero, officia vel, repellat cor",
            publicationTime: 1600616401986,
            rating: 9,
            depthOfAnswers: 3
          }
        ]
      }
    ]
  },
  {
    id: 445,
    name: "",
    email: "",
    text: "nimi sed laudant Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laboriosam ullam eum et sapiente alias sint dolor. Veritatis ad commodi facere accusantium sunt ex porro, molestiae, praesentium eaque ducimus velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem adipisci fuga doloribus t",
    publicationTime: 1600616401986,
    rating: 0,
    depthOfAnswers: 1
  },
  {
    id: 4e45,
    name: "",
    email: "",
    text: "inus qui, reprehenderit incidunt temporibus hic minima? Ad placeat sapiente et nobis quas modi, omnis quos eum a repellendus adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati exercitationem dignissimos reprehenderit eligendi excepturi ex nulla eius officiis eos esse cumque, reiciendis nesciunt earum aspernatur vero, officia vel, repellat cor",
    publicationTime: 1600616401986,
    rating: 0,
    depthOfAnswers: 1
  }])

  /* хук - ссылка на тот комментарий, к которому будет написан ответ */
  let [replyParent, setReplyParent] = useState(0)

  /* колбек функция, передаваемая в кнопку "ответить", для привязки ответа к коментарию */
  function getReplayParent(parentId) {
    console.log("Id родительского элемента: ", parentId)
    setReplyParent(parentId)
  }

  /* Обновление списка комментариев для статьи */
  function updateComments(comment) {

    let temp = [...comments]

    if (replyParent == 0) {
      temp.push(comment)
      setComments([...temp])
      return
    }

    updateCommentReply(replyParent)

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

    /* перенос формы ответа к концу статьи, после отправки любого комментария */
    setReplyParent(0)
  }

  /* FIXME: добится автоматического обновления пройденного времени для комментария, с момента его публикации */

  /* Если кто-либо из ныне живущих, в прочтении кода дойдёт до этого момента, то перед дальнейшим прочтением я хотел бы принести ему свои искренние извинения и попросить не пытаться меня найти с целью расправы и всяческого унижения меня и моей личности. Пожалуйста, имейте ввиду что я был морально сломлен, изничтожен и пошёл на эти крайние меры (написании функций подобных updateCommentRating) будучи в глубоком отчаянии.
  Если же этот человек всё же попытается найти меня и избавить меня и этот мир от страданий, то найти он меня может либо по адресу ул. Пушкина д. Колотушкина кв. под номером 7, либо, что более вероятно, в центральной психоневрологической больнице, в отделении для больных с тяжёлыми и затяжными психозами. Надеюсь на ваш гуманизм.
  Взыщи, Углепластик душу погибшего и охлади его траханье */

  /* понимаю, что подход к реализацию этого функционала должен быть иным. Возможно, экшены были бы наилучшим вариантом */
  function updateCommentRating(commentId, sign) {
    /* создаю копию стейта с комментариями */
    let temp = [...comments]

    updateCommentRating(commentId, sign)

    function updateCommentRating(commentId, sign) {

      (function func(temp) {

        for (let elem of temp) {
          if (elem["id"] == commentId) {
            elem["rating"] += sign ? 1 : -1;
            console.log(`Рейтинг комментария ${elem} изменился: ${elem["rating"]}`);
          } else if (elem['reply']) {
            console.log(`Рейтинг комментария не изменился`);
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