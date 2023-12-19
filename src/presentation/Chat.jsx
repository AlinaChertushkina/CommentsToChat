import React from 'react';
import './assets/global.scss';

function Chat({
  userNameModified,
  profilePicLink,
  modifiedComment,
  isHighlighted,
}) {
  return (
    <div className={`chat ${isHighlighted ? 'highlighted' : ''}`}>
      <div className="user-info">
        <img src={profilePicLink} alt="Profile pic" className="profile-pic" />
        <p className="user-name">{userNameModified}</p>
      </div>
      <p className="comment-text">{modifiedComment}</p>
    </div>
  );
}

export { Chat };
