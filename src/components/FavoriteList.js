import "../assets/style.css";
import FavoriteCard from "./FavoriteCard";

function FavoriteList({ favesArray }) {
  return (
    <div className="card-area">
      {favesArray.map((fav, index) => (
        <FavoriteCard key={index} info={fav} />
      ))}
    </div>
  );
}

export default FavoriteList;
