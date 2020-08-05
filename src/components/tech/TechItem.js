import React, { Fragment } from "react";
import PropTypes from "prop-types";

const TechItem = ({ tech }) => {
  const { firstName, lastName } = tech;
  return (
    <Fragment>
      <li className="collection-item">
        <div>
          {firstName} {lastName}
          <a href="#!" className="secondary-content">
            <i className="material-icons grey-text">delete</i>
          </a>
        </div>
      </li>
    </Fragment>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
};

export default TechItem;
