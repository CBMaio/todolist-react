import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeBtn = () => {
  return (
    <Container className="mt-3 p-0">
      <Link to="/" >
        <Button variant="primary">Inicio</Button>
      </Link>
    </Container>
  );
};
export default HomeBtn;
