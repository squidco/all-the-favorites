import "../assets/style.css"
import FavoriteModal from "./FavoriteModal"


function SiteHeader({updateList}){
    return(
        <header className="site-header">
        <div className="header-wrapper">
          <h2 className="page-name">All the Faves</h2>
          <FavoriteModal updateList={updateList}></FavoriteModal>
        </div>
      </header>
    )
}

export default SiteHeader