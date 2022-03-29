import "./style.scss";

function ConfirmDeleteModal() {
  return (
    <div className="delete-modal">
      <div className="delete-modal-container">
        <div className="delete-modal-title">
          <p>Are you sure you want to delete this item?</p>
        </div>
        <div className="delete-modal-buttons">
          <button className="btn btn-cancel">Cancel</button>
          <button className="btn btn-confirm">Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDeleteModal;
