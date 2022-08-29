import "./FavoriteCard.css";
import "../assets/style.css";
import { Link } from "react-router-dom";

function FavoriteCard({ info }) {
  return (
    <Link to={`favorites/${info.id}`}>
      <div className="card-wrapper" id={info.id}>
        <div className={`gradient card`} style={{ backgroundColor: info.pic }}>
          <div className="card-body">
            <h1 className="card-title">{info.title}</h1>
            <p className="card-description">{info.description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default FavoriteCard;
