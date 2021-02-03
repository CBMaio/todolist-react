import { useState, useReducer } from "react";
import { Container } from "react-bootstrap";
import Header from "./Components/Header";
import Create from "./Components/Create";
import List from "./Components/List";
import { todoReducer, initialState } from "./reducers/todo";
import { ADD_ACTIVITY } from "./reducers/actions/todo";


function App() {

  const [state, dispatch] = useReducer(todoReducer, initialState)

  const getActivities = (newActivity) => {
    dispatch({ type: ADD_ACTIVITY, payload: { activity: newActivity } });
  }

  return (
    <Container>
      <Header />
      <Create getActivities={getActivities} />
      <List activities = {state.activities}/>
    </Container>
  );
}

export default App;
