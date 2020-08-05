import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { addLogs } from "../../action/logAction";
import { connect } from "react-redux";
import { v4 as uuid } from "uuid";
import PropTypes from "prop-types";

const AddLogModal = ({ addLogs }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  const onSubmit = (e) => {
    if (message === "" || tech === "") {
      M.toast({ html: "please enter required feild", inDuration: 1000 });
    } else {
      // console.log(message, tech, attention);

      const newLog = {
        id: uuid(),
        message,
        attention,
        tech,
        date: new Date(),
      };

      addLogs(newLog);

      M.toast({ html: `Log added by ${tech}` });

      setMessage("");
      setTech("");
      setAttention(false);
    }
  };

  return (
    <div id="add-log-modal" className="modal" style={{ modalStyle }}>
      <div className="modal-content">
        <h4>Enter Sytem Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Log Message
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="input-feild"
              onChange={(e) => setTech(e.target.value)}
            >
              <option value="" disabled>
                Select Technician
              </option>
              <option value="John Doe">John Doe</option>
              <option value="Sam Smith">Sam Smith</option>
              <option value="Sara Wilson">Sara Wilson</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>

      <div className="modal-footer blue">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect waves-green btn-flat white blue-text"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%",
};

AddLogModal.propType = {
  addLogs: PropTypes.func.isRequired,
};

export default connect(null, { addLogs })(AddLogModal);
