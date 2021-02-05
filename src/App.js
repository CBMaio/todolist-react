import { useReducer, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import TodolistComplete from "./Components/TodolistComplete";
import Main from "./Components/Main";
import List from "./Components/List";
import Favorites from "./Components/Favorites";
import HomeBtn from "./Components/HomeBtn";
import { usePersistedReducer } from "./reducers/todo";
import { usePersistedReducerFav } from "./reducers/favorites";
import {
  ADD_ACTIVITY,
  DELETE_ACTIVITY,
  RESET_ACTIVITY,
} from "./reducers/actions/todo";
import { todoReducer, initialState } from "./reducers/todo";
import { favoritesReducer, initialStateFav } from "./reducers/favorites";

function App() {
  const [state, dispatch] = usePersistedReducer(todoReducer, initialState);
  const [stateFav, dispatchFav] = usePersistedReducerFav(
    favoritesReducer,
    initialStateFav
  );

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
    <>
      <Router>
        <HomeBtn />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/todolistComplete">
            <TodolistComplete
              activities={state.activities}
              deleteActivities={deleteActivities}
              changeAct={changeAct}
              addFavorites={addFavorites}
              getActivities={getActivities}
              resetActivities={resetActivities}
              favorites={stateFav.favorites}
              deleteFavorites={deleteFavorites}
            />
          </Route>
          <Container>
            <Row>
              <Col>
                <Route path="/list">
                  <List
                    activities={state.activities}
                    deleteActivities={deleteActivities}
                    changeAct={changeAct}
                    addFavorites={addFavorites}
                    favorites={stateFav.favorites}
                  />
                </Route>

                <Route path="/favorites">
                  <Favorites
                    favorites={stateFav.favorites}
                    deleteFavorites={deleteFavorites}
                  />
                </Route>
              </Col>
            </Row>
          </Container>
        </Switch>
      </Router>
    </>
  );
}

export default App;
