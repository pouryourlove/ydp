import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux"; // Import Provider from react-redux
import store from "./store"; // Import the Redux store (ensure the path is correct)
import App2 from "./App2";

const root = ReactDOM.createRoot(document.getElementById("root"));

//#3. store 연결
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <App2 />
    </Provider>
  </React.StrictMode>
);

// 그 다음으로 app.js로 간다.
