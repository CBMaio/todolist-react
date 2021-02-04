import { useReducer } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Row, Col, Form } from "react-bootstrap";
import Header from "./Components/Header";
import Create from "./Components/Create";
import List from "./Components/List";
import Favorites from "./Components/Favorites";
import { todoReducer, initialState } from "./reducers/todo";
import { favoritesReducer, initialStateFav } from "./reducers/favorites";
import {
  ADD_ACTIVITY,
  DELETE_ACTIVITY,
  RESET_ACTIVITY,
} from "./reducers/actions/todo";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [stateFav, dispatchFav] = useReducer(favoritesReducer, initialStateFav);

  const getActivities = (newActivity) => {
    dispatch({ type: ADD_ACTIVITY, payload: { activity: newActivity } });
  };

  const deleteActivities = (id) => {
    dispatch({ type: DELETE_ACTIVITY, payload: { id } });
  };

  const resetActivities = () => {
    dispatch({ type: RESET_ACTIVITY });
  };

  const changeAct = (id) => {
    const selectTask = state.activities.find((activity) => activity.id === id);

    let selectActivity2 = {
      ...selectTask,
      state: selectTask.state === true ? false : true,
    };

    selectTask.state = selectActivity2.state;
    return selectActivity2.state;
  };

  const addFavorites = (favorite) => {
    dispatchFav({ type: ADD_ACTIVITY, payload: { favorite } });
  };

  const deleteFavorites = (id) => {
    dispatchFav({ type: DELETE_ACTIVITY, payload: { id } });
  };

  return (
    <Container>
      <Header />
      <Create getActivities={getActivities} resetActivities={resetActivities} />
      <Row className="justify-content-center border mt-3">
        <Col md={6}>
          <List
            activities={state.activities}
            deleteActivities={deleteActivities}
            changeAct={changeAct}
            addFavorites={addFavorites}
            favorites={stateFav.favorites}
          />
        </Col>
        <Col md={6}>
          <Favorites
            favorites={stateFav.favorites}
            deleteFavorites={deleteFavorites}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
