import "./FavoriteModal.css";
import { useState } from "react";

function FavoriteModal({updateList}) {
  const [showFavoriteModal, setShowFavoriteModal] = useState(false);
  const [form, setForm] = useState({});

  function toggleFavoriteModal() {
    setShowFavoriteModal(!showFavoriteModal);
  }

  function handleInput(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function saveFavorite() {
    if (localStorage.getItem("favorites") === null) {
      var newArr = [form];
      localStorage.setItem("favorites", JSON.stringify(newArr));
     
    } else {
      var tempArr = JSON.parse(localStorage.getItem("favorites"));
      tempArr.push(form);
      localStorage.setItem("favorites", JSON.stringify(tempArr));
      
    }
  }

  function confirmAdd() {
    saveFavorite();
    updateList()
    toggleFavoriteModal();
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
                  type="color"
                  value={form.pic || ""}
                  name="pic"
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
              <button className="confirm-btn" onClick={confirmAdd}>
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
        Add Fave
      </button>
    );
}

export default FavoriteModal;
