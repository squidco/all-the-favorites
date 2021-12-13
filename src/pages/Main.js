import { useEffect, useState } from "react";
import FavoriteCard from "../components/FavoriteCard";
// import "./Main.css"
import "../assets/style.css"

function Main() {
  const [favesArray, setFavesArray] = useState([]);
  const [form, setForm] = useState({});

  useEffect(() => {
    if (localStorage.getItem("favorites") === null) {
        localStorage.setItem("favorites", JSON.stringify([]))
    }
    setFavesArray(JSON.parse(localStorage.getItem("favorites")));
  }, []);

  function handleInput(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log(form);
  }

  function saveFavorite() {
    if (localStorage.getItem("favorites") === null) {
      var newArr = [form];
      localStorage.setItem("favorites", JSON.stringify(newArr));
    } else {
      var tempArr = JSON.parse(localStorage.getItem("favorites"));
      tempArr.push(form);
      localStorage.setItem("favorites", JSON.stringify(tempArr));
      console.log(localStorage);
    }
  }

  return (
    <>
      <header>
        <h2>All the Faves</h2>
      </header>
      <div className="row">
        {favesArray.map((fav) => (
          <FavoriteCard key={fav.title} info={fav} />
        ))}
      </div>
      <button onClick={saveFavorite}>+</button>
      <div>
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
    </>
  );
}

export default Main;
