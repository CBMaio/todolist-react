import { Row, Col, Form, Button } from "react-bootstrap";
import { nanoid } from "nanoid";
import "./create.css";

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
    <div className="form-container">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Ingrese una tarea"
            name="work"
          />
        </Form.Group>
        <div className="form-btn-container">
          <Button type="submit" className="w-100 btn-plus" variant="secondary">
            Agregar tarea
          </Button>
          <Button
            className="w-100 btn-delete"
            variant="secondary"
            onClick={() => resetActivities()}
          >
            Eliminar listado
          </Button>
        </div>
      </Form>
    </div>
  );
};
export default Create;
