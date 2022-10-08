import React from "react";
import { Provider } from "react-redux";
import Layout from "./components/layout";

import "./index.scss";
import store from "./store.js";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Layout />
      </Provider>
    </div>
  );
}

export default App;
