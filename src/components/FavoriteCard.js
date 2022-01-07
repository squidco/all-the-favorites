import "./FavoriteCard.css";
import "../assets/style.css";

function FavoriteCard({ info }) {
  // Needs title and picture link or color
  return (
    <div className={`gradient card`} style={{backgroundColor: info.pic}}>
      <h1 className="card-title">{info.title}</h1>
      <div className="card-body">
        <p className="card-description">{info.description}</p>
      </div>
    </div>
  );
}

export default FavoriteCard;
