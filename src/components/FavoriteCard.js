import "./FavoriteCard.css";
import "../assets/style.css";

function FavoriteCard({ info }) {
  // Needs title and picture link or color
  return (
    <div className="card-wrapper">
      <div className={`gradient card`} style={{ backgroundColor: info.pic }}>
        <div className="card-body">
          <h1 className="card-title">{info.title}</h1>
          <p className="card-description">{info.description}</p>
        </div>
      </div>
    </div>
  );
}

export default FavoriteCard;
