import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./main.css";

const Main = () => {
  return (
    <div className="justify-content-center text-center align-items-center main-vw">
      <div className="principal-title-contaienr">
        <h2>Página Principal</h2>
      </div>
      <div>
        <div className="mt-5 btn-container">
          <Link to="/todolistComplete">
            <Button variant="primary" size="lg" className="style-btn violetbtn">
              Agenda Completa
            </Button>
          </Link>
        </div>
        <div className="mt-5 btn-container">
          <Link to="/list">
            <Button variant="primary" size="lg" className="style-btn violetbtn">
              Listado de tareas
            </Button>
          </Link>
        </div>
        <div className="mt-5 btn-container">
          <Link to="/favorites">
            <Button variant="primary" size="lg" className="style-btn violetbtn">
              Tareas Destacadas
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Main;
