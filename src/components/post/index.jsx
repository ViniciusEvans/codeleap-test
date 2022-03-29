import "./style.scss";
import editIcon from "../../assets/edit-icon.svg";
import deleteIcon from "../../assets/delete-icon.svg";
import calcTime from "../../services/getTIme";

function PostComponent(props) {
  return (
    <div className="post-container" key={props.id}>
      <div className="post-header">
        <h1 className="post-title">{props.title}</h1>
        {props.username === props.loggedUser && (
          <div className="delete-edit-button">
            <button
              onClick={() => console.log(props.id)}
              className="btn delete-btn"
            >
              <img src={deleteIcon} alt="delete icon" />
            </button>
            <button
              onClick={() => console.log(props.id)}
              className="btn edit-btn"
            >
              <img src={editIcon} alt="delete icon" />
            </button>
          </div>
        )}
      </div>
      <div className="post--content--section">
        <div className="post-infos">
          <span className="post--username">@{props.username}</span>
          <span className="post--time">{calcTime(props.time) + " ago"}</span>
        </div>
        <div className="post-content">
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  );
}

export default PostComponent;
