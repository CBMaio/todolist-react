import { Row } from "react-bootstrap";
import Item from "./Item";


const List = ({ activities, deleteActivities, changeAct, addFavorites, favorites }) => {

  return (
    <>
    <Row className="mt-2 mb-4">
      <h3>Tu listado de tareas:</h3>

      {activities ? (
        activities.map((act) => (
          <Item
            {...act}
            key={act.id}
            deleteActivities={deleteActivities}
            changeAct={changeAct}
            addFavorites={addFavorites}
            favorites={favorites}
          />
        ))
      ) : (
        <h3>No hay información</h3>
      )}
    </Row>
    </>
  );
};
export default List;
