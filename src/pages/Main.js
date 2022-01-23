import { useEffect, useState } from "react";
import SiteHeader from "../components/SiteHeader";
import "../assets/style.css";
import FavoriteList from "../components/FavoriteList";

function Main() {
  const [favesArray, setFavesArray] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("favorites") === null) {
      localStorage.setItem("favorites", JSON.stringify([]));
    }
    setFavesArray(JSON.parse(localStorage.getItem("favorites")));
  }, []);

  function updateList() {
    setFavesArray(JSON.parse(localStorage.getItem("favorites")));
  }

  return (
    <>
      <SiteHeader updateList={updateList}></SiteHeader>
      <main className="site-main">
        <div className="main-wrapper">
          <FavoriteList favesArray={favesArray}></FavoriteList>
        </div>
      </main>
    </>
  );
}

export default Main;
