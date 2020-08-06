import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deleteLog, setCurrent } from "../../action/logAction";

import M from "materialize-css/dist/js/materialize.min.js";
const LogItem = ({ log, deleteLog, setCurrent }) => {
  console.log(log);
  const { id, message, attention, date, tech } = log;
  const onDelete = () => {
    deleteLog(id);
    M.toast({ html: "Deleted log successfully" });
  };

  return (
    <Fragment>
      <li className="collection-item">
        <div>
          <a
            href="#edit-log-modal"
            className={`modal-trigger ${attention ? "red-text" : "blue-text"}`}
            onClick={() => setCurrent(log)}
          >
            {message}
          </a>{" "}
          <br />
          <span className="grey-text">
            <span className="black-text">Id # {id}</span> {"   "}
            <span className="black-text">By : {tech}</span> on -
            <Moment format="MMMM Do YYYY, h:mm:ss a">{date}</Moment>
          </span>
          <a href="#!" className="secondary-content">
            <i className="material-icons grey-text" onClick={onDelete}>
              delete
            </i>
          </a>
        </div>
      </li>
    </Fragment>
  );
};

LogItem.propType = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default connect(null, { deleteLog, setCurrent })(LogItem);
