import { useEffect, useState } from "react";
import FavoriteCard from "../components/FavoriteCard";
import SiteHeader from "../components/SiteHeader";
import "../assets/style.css";


function Main() {
  const [favesArray, setFavesArray] = useState([]);
  // const [form, setForm] = useState({});

  useEffect(() => {
    if (localStorage.getItem("favorites") === null) {
      localStorage.setItem("favorites", JSON.stringify([]));
    }
    setFavesArray(JSON.parse(localStorage.getItem("favorites")));
  }, []);

  return (
    <>
      <SiteHeader />
      <main className="site-main">
        <div className="main-wrapper">
          <div className="card-area">
            {favesArray.map((fav, index) => (
              <FavoriteCard key={index} info={fav} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
