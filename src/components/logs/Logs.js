import React, { Fragment, useEffect } from "react";
import LogItem from "./LogItem";
import { connect } from "react-redux";
import Preloader from "../layouts/Preloader";
import { getLogs } from "../../action/logAction";
import PropTypes from "prop-types";

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);

  // const getLogs = async () => {
  //   setLoading(true);
  //   const res = await fetch("/logs");
  //   const data = await res.json();
  //   setLogs(data);
  //   setLoading(false);
  // };
  if (loading || logs === null) {
    return <Preloader />;
  } else {
    // console.log(logs);
  }
  return (
    <Fragment>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4 className="center">System Logs</h4>
        </li>

        {!loading && logs.length === 0 ? (
          <p>No logs to show....</p>
        ) : (
          logs.map((log) => (
            // console.log(log)
            <LogItem log={log} key={log.id} />
          ))
        )}
      </ul>
    </Fragment>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  log: state.log,
});

export default connect(mapStateToProps, { getLogs })(Logs);
