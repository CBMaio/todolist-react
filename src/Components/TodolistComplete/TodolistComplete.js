import Header from "../Header";
import Create from "../Create";
import List from "../List";
import Favorites from "../Favorites";
import "./todolist.css";

const TodolistComplete = (props) => {
  return (
    <div className="todolist-container">
      <Header />
      <Create
        getActivities={props.getActivities}
        resetActivities={props.resetActivities}
      />
      <div className="mt-5 container-flex">
        <List
          activities={props.activities}
          deleteActivities={props.deleteActivities}
          changeAct={props.changeAct}
          addFavorites={props.addFavorites}
          favorites={props.favorites}
        />

        <Favorites
          favorites={props.favorites}
          deleteFavorites={props.deleteFavorites}
        />
      </div>
    </div>
  );
};

export default TodolistComplete;
