import { Container, Row, Col } from "react-bootstrap";
import Header from "../Header";
import Create from "../Create";
import List from "../List";
import Favorites from "../Favorites";

const TodolistComplete = (props) => {

  return (
    <Container>
      <Header />
      <Create
        getActivities={props.getActivities}
        resetActivities={props.resetActivities}
      />
      <Row className="justify-content-center mt-3">
        <Col md={6}>
          <List
            activities={props.activities}
            deleteActivities={props.deleteActivities}
            changeAct={props.changeAct}
            addFavorites={props.addFavorites}
            favorites={props.favorites}
          />
        </Col>
        <Col md={6}>
          <Favorites
            favorites={props.favorites}
            deleteFavorites={props.deleteFavorites}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default TodolistComplete;
