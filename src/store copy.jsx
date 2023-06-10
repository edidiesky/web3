import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./Features/toggle/toggleSlice";
// import userSlice from "./Features/user/userSlice";

import modalSlice from "./Features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    modal: modalSlice,
  },
});
