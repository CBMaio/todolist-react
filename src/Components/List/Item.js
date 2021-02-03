import { Col } from "react-bootstrap";
import { Check2, Trash } from "react-bootstrap-icons";




const Item = ({ description }) => {
  return (
    <Col md={8} className="mt-2 border">
      <p className="mb-1 mt-1 d-flex align-items-center justify-content-between">
        <span>
          <Check2 className="mr-3" style={{ cursor: "pointer" }} />
          {description}
        </span>
        <span style={{ cursor: "pointer" }}>
          <Trash />
        </span>
      </p>
    </Col>
  );
};
export default Item;
