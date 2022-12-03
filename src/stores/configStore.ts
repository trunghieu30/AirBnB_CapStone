import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import * as user from "./user";
import * as position from "./position";
import * as roomForRent from "./roomForRent";
import * as rentRoom from "./rentRoom";
import * as comments from "./comments";
import * as authentication from './authentication'

const rootReducer = combineReducers({
  ...user,
  ...position,
  ...roomForRent,
  ...rentRoom,
  ...comments,
  ...authentication,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export type RootState = ReturnType<typeof rootReducer>;
