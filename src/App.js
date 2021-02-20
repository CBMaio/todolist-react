import { BrowserRouter as Router, Route } from "react-router-dom";
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
import './App.css';

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
        <>
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
          <Route path="/list">
            <Container fluid  className="component-container">
              <Row>
                <Col className="justify-content-center d-flex">
                  <List
                    activities={state.activities}
                    deleteActivities={deleteActivities}
                    changeAct={changeAct}
                    addFavorites={addFavorites}
                    favorites={stateFav.favorites}
                  />
                </Col>
              </Row>
            </Container>
          </Route>

          <Route path="/favorites">
            <Container fluid  className="component-container">
              <Row className="">
                <Col className="justify-content-center d-flex">
                  <Favorites
                    favorites={stateFav.favorites}
                    deleteFavorites={deleteFavorites}
                  />
                </Col>
              </Row>
            </Container>
          </Route>
        </>
      </Router>
    </>
  );
}

export default App;
