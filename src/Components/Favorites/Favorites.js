import { Row } from "react-bootstrap";
import Favorite from "./Favorite";

const Favorites = ({ favorites, deleteFavorites }) => {
  return (
    <Row className="mt-2 mb-4">
      <h3>Tareas destacadas:</h3>
      {favorites ? (
        favorites.map((fav) => <Favorite {...fav} deleteFavorites={deleteFavorites}/>)
      ) : (
        <h4>No hay tareas destacadas</h4>
      )}
    </Row>
  );
};
export default Favorites;
