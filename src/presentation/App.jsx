import React, { useState } from 'react';
import { Chat } from './Chat';
import './assets/global.scss';

function App() {
  const [userName, setUserName] = useState('');
  const [profilePicLink, setProfilePicLink] = useState('');
  const [comment, setComment] = useState('');
  const [chatData, setChatData] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const userNameToLowerCase = userName.toLowerCase();
    const userNameModified = (
      userNameToLowerCase.charAt(0).toUpperCase() + userNameToLowerCase.slice(1)
    ).trim();
    const modifiedComment = checkSpam(comment);
    const newComment = {
      userName: userNameModified,
      profilePicLink: profilePicLink,
      comment: modifiedComment,
    };
    setChatData([newComment, ...chatData]);
    setUserName('');
    setProfilePicLink('');
    setComment('');
  }

  function checkSpam(str) {
    let spamDetection = /(viagra|XXX)/gi;
    return str.replace(spamDetection, '***');
  }

  return (
    <form className="main-container" onSubmit={handleSubmit}>
      <div className="comments">
        <div className="input-container">
          <h2 className="comment-title">Оставьте ваш комментарий</h2>
          <div className="name-block">
            <p className="enter-name">Введите ваше имя:</p>
            <input
              type="text"
              className="user_name"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
            />
          </div>
          <div className="link-block">
            <p className="enter-link">Введите ссылку вашего аватара:</p>
            <input
              type="text"
              className="link"
              value={profilePicLink}
              onChange={(event) => setProfilePicLink(event.target.value)}
            />
          </div>
          <div className="comment-block">
            <p className="leave-comment">Оставьте комментарий:</p>
            <textarea
              name="comment"
              id="comment"
              cols="30"
              rows="10"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="button">
            Отправить
          </button>
        </div>
        <div className="chat-container">
          <h2 className="chat-title">Чат</h2>
          {chatData.map((comment, index) => (
            <Chat
              key={index}
              userNameModified={comment.userName}
              profilePicLink={comment.profilePicLink}
              modifiedComment={comment.comment}
              isHighlighted={index === 0}
            />
          ))}
        </div>
      </div>
    </form>
  );
}

export { App };
