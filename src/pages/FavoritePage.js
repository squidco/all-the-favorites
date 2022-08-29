import SiteHeader from "../components/SiteHeader";
import "../assets/style.css";
import { useEffect, useState } from "react";

function FavoritePage() {
  const [favorite, setFavorite] = useState();

  useEffect(() => {
    let id = window.location.pathname.split("/")[2];

    let faveArray = JSON.parse(localStorage.getItem("favorites"));
    
    faveArray.forEach((element) => {
      
      if (element.id === id) {
        console.log(element)
        setFavorite(element);
      }
    });
  }, []);

      return (
        <>
          <SiteHeader></SiteHeader>
          <main className="site-main">
            <div className="main-wrapper">
              <div className="favorite-name-container">
                <h1 className="favorite-title">{favorite.title}</h1>
              </div>
              <div className="favorite-description-container">
                <p className="favorite-description">{favorite.description}</p>
              </div>
            </div>
          </main>
        </>
      );
  }
// }

export default FavoritePage;
