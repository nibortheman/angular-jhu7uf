import { createReducer, on, createSelector } from "@ngrx/store";
import * as ApplicationActions from "./application.actions";

export interface State {
  password: Object;
}

export const initialState: State = {
  password: null
};

const _applicationReducer = createReducer(
  initialState,
  on(ApplicationActions.setPassword, (state, { password }) => ({ ...state,
  password }))
);

export function applicationReducer(state: State, action) {
  return _applicationReducer(state, action);
}
