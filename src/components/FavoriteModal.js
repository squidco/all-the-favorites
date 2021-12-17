import "./FavoriteModal.css";
import { useState } from "react";

function FavoriteModal({ form, handleInput, saveFavorite }) {
  const [showFavoriteModal, setShowFavoriteModal] = useState(false);

  function toggleFavoriteModal() {
    setShowFavoriteModal(!showFavoriteModal);
  }

  if (showFavoriteModal === true) {
    return (
      <>
        <button className="add-fave-btn" onClick={toggleFavoriteModal}>
          Modal
        </button>
        <div className="modal-container">
          <div className="modal-body">
            <button className="close-btn" onClick={toggleFavoriteModal}>
              X
            </button>
            <div className="modal-form">
              <div className="modal-input">
                <p>Title</p>
                <input
                  value={form.title || ""}
                  name="title"
                  type="text"
                  onChange={handleInput}
                ></input>
              </div>
              <div className="modal-input">
                <p>Color of Background</p>
                <input
                  value={form.pic || ""}
                  name="pic"
                  type="text"
                  onChange={handleInput}
                ></input>
              </div>
              <div className="modal-input">
                <p>Description/Wants</p>
                <textarea
                  className="description"
                  value={form.description || ""}
                  name="description"
                  type="text"
                  onChange={handleInput}
                ></textarea>
              </div>
              <button className="confirm-btn" onClick={saveFavorite}>
                Add Fave
              </button>
            </div>
          </div>
        </div>
      </>
    );
  } else
    return (
      <button className="add-fave-btn" onClick={toggleFavoriteModal}>
        Modal
      </button>
    );
}

export default FavoriteModal;
