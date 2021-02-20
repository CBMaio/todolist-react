import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './homeBtn.css';

const HomeBtn = () => {
  return (
    <Container fluid className="p-4 home-button-container">
      <Link to="/" >
        <button className="btn home-button" >Inicio</button>
      </Link>
    </Container>
  );
};
export default HomeBtn;
