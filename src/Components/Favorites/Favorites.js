import Favorite from "./Favorite";
import './favorites.css';

const Favorites = ({ favorites, deleteFavorites }) => {
  return (
    <div className="mt-2 mb-4 p-4 favorites-container">
      <h3>Tareas destacadas:</h3>
      {favorites ? (
        favorites.map((fav) => <Favorite {...fav} deleteFavorites={deleteFavorites} key={fav.id}/>)
      ) : (
        <h4>No hay tareas destacadas</h4>
      )}
    </div>
  );
};
export default Favorites;
