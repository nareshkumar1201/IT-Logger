import React from "react";

const AddBtn = () => {
  return (
    <div className="fixed-action-btn">
      <a
        href="#add-log-modal"
        className="btn-floating btn-large blue modal-trigger"
      >
        <i className="material-icons large">add</i>
      </a>
      <ul>
        <li>
          <a
            href="#tech-list-modal"
            className="btn-floating btn-small green modal-trigger"
          >
            <i className="material-icons small">person</i>
          </a>
        </li>
        <li>
          <a
            href="#add-tech-modal"
            className="btn-floating btn-medium red modal-trigger"
          >
            <i className="material-icons medium"> person_add </i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddBtn;
