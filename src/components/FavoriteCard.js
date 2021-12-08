import "./FavoriteCard.css";

function FavoriteCard({ info }) {
  // Needs title and picture link or color
  return (
    <div className={`${info.pic} card-body`}>
      <h1 className="card-title">{info.title}</h1>
    </div>
  );
}

export default FavoriteCard;
