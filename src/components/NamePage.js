import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { FindNameSelector } from "../features/NamesSlice";
import { Link } from "react-router-dom";

const NamePage = (props) => {
  const id = props.match.params.id;
  const name = useSelector((state) => FindNameSelector(state, id));
  return (
    <div className="name-page">
      <div className="name-page__name">{name.name}</div>
      <p className="name-page__description">{name.description}</p>
      <Link className="name-page__home" to="/">
        العودة إلى القائمة
      </Link>
    </div>
  );
};

NamePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default NamePage;
