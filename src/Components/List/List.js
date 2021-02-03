import { Row, Col } from "react-bootstrap";
import Item from "./Item";

const List = ({ activities }) => {
  return (
    <>
      <Row className="justify-content-center border mt-3">
        <Col md={12}>
          <h3>Tu listado de tareas:</h3>
        </Col>
      </Row>
      <Row className="mt-2">
        {activities.map((act) => (
          <Item {...act} key={act.id} />
        ))}
      </Row>
    </>
  );
};
export default List;
