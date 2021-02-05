import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <Row className="justify-content-center text-center pt-5 pb-5">
      <Col md={12} className="">
        <h2>Página Principal</h2>
      </Col>
      <Col>
        <div className="mt-5">
          <Link to="/todolistComplete">
            <Button variant="primary" size="lg">
              Agenda Completa
            </Button>
          </Link>
        </div>
        <div className="mt-5">
          <Link to="/list">
            <Button variant="primary" size="lg">
              Listado de tareas
            </Button>
          </Link>
        </div>
        <div className="mt-5">
          <Link to="/favorites">
            <Button variant="primary" size="lg">
              Tareas Destacadas
            </Button>
          </Link>
        </div>
      </Col>
    </Row>
  );
};
export default Main;
