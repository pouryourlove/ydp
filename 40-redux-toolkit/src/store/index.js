//[toolkit 사용]
//#2. store 생성
// - configureStore를 사용하여 스토어 생성.
// - *configureStore*
// - redux toolkit 에서 제공하는 함수로, 스토어를 더 쉽게 설정할 수 있게 해줌.

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import visibleReducer from "./isVisibleSlice";
import moneyReducer from "./moneySlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    isVisible: visibleReducer,
    money: moneyReducer,
  },
});

export default store; //store 내보내줌

//다음으로 index.js 가서 provider로 컴포넌트 감싸준다.
