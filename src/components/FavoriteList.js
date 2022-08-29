import "../assets/style.css";
import FavoriteCard from "./FavoriteCard";

function FavoriteList({ favesArray }) {

  return (
    <div className="card-area">
      {favesArray.map((fav) => (
        <FavoriteCard key={fav.id} info={fav} />
      ))}
    </div>
  );
}

export default FavoriteList;
