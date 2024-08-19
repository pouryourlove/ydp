import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import counterReducer from "./store/counterReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App2 from "./App2";
import App3 from "./App3";
import rootReducer from "./store";
import App4 from "./App4";

const root = ReactDOM.createRoot(document.getElementById("root"));

//#6. store 생성
// [전통 redux 방식]
// 'createStore'를 사용하여 redux 스토어를 생성.
const store = createStore(rootReducer);

root.render(
  <React.StrictMode>
    {/* React와 Redux 연결 */}
    {/* 애플리케이션의 모든 컴포넌트가 Redux 스토어에 접근 할 수 있게 됨 */}
    {/* Redux Provider로 스토어를 앱에 주입함 */}
    <Provider store={store}>
      <App />
      <hr />
      <App2 />
      <App3 />
      <App4 />
    </Provider>
  </React.StrictMode>
);
