import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import * as actions from "../../actions/index";

function ConfirmDeleteModal() {
  const reducerStates = useSelector((state) => state);
  const dispatch = useDispatch();

  async function deletePost() {
    try {
      await fetch(
        "https://dev.codeleap.co.uk/careers/" +
          reducerStates.reducer.deletePostSetup.id +
          "/",
        {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        }
      );
    } catch (error) {
      dispatch(actions.createPostFailure(error.message));
    } finally {
      dispatch(actions.getPost());
      dispatch(actions.deletePost());
    }
  }
  return (
    <div className="delete-modal">
      <div className="delete-modal-container">
        <div className="delete-modal-title">
          <p>Are you sure you want to delete this item?</p>
        </div>
        <div className="delete-modal-buttons">
          <button
            className="btn btn-cancel"
            onClick={() => dispatch(actions.deletePost())}
          >
            Cancel
          </button>
          <button className="btn btn-confirm" onClick={deletePost}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDeleteModal;
