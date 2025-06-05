import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
/*Configure Store is a function from library which simplifies the process of making a redux store
 without adding any boilerplate code. and also helps in showing the state in the browser without adding any line of code*/

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
