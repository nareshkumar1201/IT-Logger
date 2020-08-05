import React, { Fragment, useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import SearchBar from "./components/layouts/Searchbar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layouts/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/tech/AddTechModal";
import TechListModal from "./components/tech/TechListModal";
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

function App() {
  useEffect(() => {
    //Init Matrialize JS
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <div className="App">
          <div className="container ">
            <SearchBar />
          </div>

          <div className="container">
            <Logs />
            <AddBtn />
            <AddLogModal />
            <EditLogModal />
            <AddTechModal />
            <TechListModal />
          </div>
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
