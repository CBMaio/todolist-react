import { Row, Col, Form, Button } from "react-bootstrap";
import { nanoid } from "nanoid";

const Create = ({ getActivities, resetActivities }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const idRandom = nanoid(10);
    const [{ value }] = e.target;

    if (value.trim() === "") return;

    const newActivity = {
      id: idRandom,
      description: value,
      state: false,
    };

    getActivities(newActivity);
    e.target[0].value = "";
  };



  return (
    <Row className="justify-content-center mt-3">
      <Col md={6}>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Ingrese una tarea"
              name="work"
            />
          </Form.Group>
          <Button type="submit" className="w-100" variant="secondary">
            Agregar tarea
          </Button>
          <Button className="mt-2 w-100" variant="danger" onClick={() => resetActivities()}>
            Eliminar listado
          </Button>
        </Form>
      </Col>
    </Row>
  );
};
export default Create;
