import Item from "./Item";
import "./list.css";

const List = ({
  activities,
  deleteActivities,
  changeAct,
  addFavorites,
  favorites,
}) => {
  return (
    <>
      <div className="mt-2 mb-4 p-4 list-container">
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
      </div>
    </>
  );
};
export default List;
