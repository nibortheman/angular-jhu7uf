import {
  createSelector,
  ActionReducer,
  MetaReducer,
  Action,
  ActionReducerMap
} from "@ngrx/store";

import * as fromApplication from "./application.reducer";
import { InjectionToken } from "@angular/core";

export interface State {
  application: fromApplication.State;
}

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<State, Action>
>("Root reducers token", {
  factory: () => ({
    application: fromApplication.applicationReducer
  })
});

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state, action) => {
    const result = reducer(state, action);
    return result;
  };
}

export const metaReducers: MetaReducer<State>[] = [logger];

export const getApplicationState = (state: State) => state.application;

export const getPassword: any = createSelector(
  getApplicationState,
  state => state.password
);
