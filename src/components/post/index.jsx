import "./style.scss";
import editIcon from "../../assets/edit-icon.svg";
import deleteIcon from "../../assets/delete-icon.svg";

function PostComponent({ title, username, time, content }) {
  return (
    <div className="post-container">
      <div className="post-header">
        <h1 className="post-title">{title}</h1>
        <div className="delete-edit-button">
          <button className="btn delete-btn">
            <img src={deleteIcon} alt="delete icon" />
          </button>
          <button className="btn edit-btn">
            <img src={editIcon} alt="delete icon" />
          </button>
        </div>
      </div>
      <div className="post--content--section">
        <div className="post-infos">
          <span className="post--username">@{username}</span>
          <span className="post--time">{time}</span>
        </div>
        <div className="post-content">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default PostComponent;
