function FavoriteModal({ form, show, handleInput, saveFavorite }) {
  if (show === true) {
    return (
      <div>
        <button onClick={saveFavorite}>+</button>
        <input
          value={form.title || ""}
          name="title"
          type="text"
          onChange={handleInput}
        ></input>
        <input
          value={form.pic || ""}
          name="pic"
          type="text"
          onChange={handleInput}
        ></input>
        <input
          value={form.description || ""}
          name="description"
          type="text"
          onChange={handleInput}
        ></input>
      </div>
    );
  } else return null;
}

export default FavoriteModal;
