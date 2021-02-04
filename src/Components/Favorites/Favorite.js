import { Col } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";

const Favorite = ({ description, deleteFavorites, id }) => {
  const deleteFav = () => {
    deleteFavorites(id);
  };
  return (
    <Col md={10} className="mt-2 border">
      <p className="mb-2 mt-2 d-flex align-items-center justify-content-between">
        {description}

        <span style={{ cursor: "pointer" }} onClick={deleteFav}>
          <Trash />
        </span>
      </p>
    </Col>
  );
};

export default Favorite;
