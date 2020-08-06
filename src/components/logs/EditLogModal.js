import React, { useState, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateLog } from "../../action/logAction";

const EditLogModal = ({ current, updateLog }) => {
  // console.log(current);
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  useEffect(() => {
    if (current) {
      console.log(current.tech);
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.tech);
    }
  }, [current]);

  const onSubmit = (e) => {
    if (message === "" || tech === "") {
      M.toast({ html: "please enter required feild", inDuration: 1000 });
    } else {
      console.log(message, tech, attention);
      // clear Fields
      setMessage("");
      setTech("");
      setAttention(false);
    }
  };

  return (
    <div id="edit-log-modal" className="modal" style={{ modalStyle }}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {/* <label htmlFor="message" className="active">
              Log Message
            </label> */}
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
          Update
        </a>
      </div>
    </div>
  );
};
EditLogModal.propTypes = {
  current: PropTypes.object,
  updateLog: PropTypes.func.isRequired,
};

const modalStyle = {
  width: "75%",
  height: "75%",
};
const MapStateToProps = (state) => ({
  current: state.log.current,
});
export default connect(MapStateToProps, { updateLog })(EditLogModal);
