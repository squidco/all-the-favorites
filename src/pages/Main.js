import { useEffect, useState } from "react";
import FavoriteCard from "../components/FavoriteCard";
// import "./Main.css"
import "../assets/style.css";
import FavoriteModal from "../components/FavoriteModal";

function Main() {
  const [favesArray, setFavesArray] = useState([]);
  const [form, setForm] = useState({});

  useEffect(() => {
    if (localStorage.getItem("favorites") === null) {
      localStorage.setItem("favorites", JSON.stringify([]));
    }
    setFavesArray(JSON.parse(localStorage.getItem("favorites")));
  }, []);

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
      console.log(localStorage);
    }
  }

  return (
    <>
      <header className="site-header">
        <div className="header-wrapper">
          <h2 className="page-name">All the Faves</h2>
          <FavoriteModal
            saveFavorite={saveFavorite}
            form={form}
            handleInput={handleInput}
          ></FavoriteModal>
        </div>
      </header>
      <main className="site-main">
        <div className="main-wrapper">
          <div className="card-area">
            {favesArray.map((fav) => (
              <FavoriteCard key={fav.title} info={fav} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
