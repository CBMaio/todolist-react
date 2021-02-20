import { useState } from "react";

import { Col } from "react-bootstrap";
import {
  Check2,
  Trash,
  Check2All,
  Star,
  StarFill,
} from "react-bootstrap-icons";

import './list.css';

const Item = ({
  description,
  id,
  deleteActivities,
  changeAct,
  addFavorites,
  favorites,
}) => {
  const [statusValue, setStatusValue] = useState(false);

  const deleteAct = () => {
    deleteActivities(id);
  };

  const changeStatusAct = () => {
    setStatusValue(changeAct(id));
  };

  const selectFav = () => {
    addFavorites({ description, id });
  };

  const isFavorite = () => favorites.find((favorite) => favorite.id === id);
  return (
    <Col className="mt-2 item">
      <span className="mb-1 mt-1 d-flex align-items-center justify-content-between">
        <p
          onClick={changeStatusAct}
          className="mb-1 mt-1"
          style={{
            cursor: "pointer",
          }}
        >
          {statusValue ? (
            <Check2All className="mr-3" />
          ) : (
            <Check2 className="mr-3" />
          )}

          <span
            className="mr-3"
            style={{
              textDecoration: statusValue ? "line-through" : "",
            }}
          >
            {" "}
            {description}
          </span>
        </p>

        <span>
          {isFavorite() ? (
            <StarFill color="orange" className="mr-4" />
          ) : (
            <span
              onClick={selectFav}
              className="mr-4"
              style={{ cursor: "pointer" }}
            >
              <Star />
            </span>
          )}
          <span onClick={deleteAct} style={{ cursor: "pointer" }}>
            <Trash />
          </span>
        </span>
      </span>
    </Col>
  );
};
export default Item;
