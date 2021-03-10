import { createAction, props } from "@ngrx/store";

export const getPassword = createAction(
  "[Application] Get password",
  props<{ currPassword: string }>()
);
export const setPassword = createAction(
  "[Application] Set password",
  props<{ password: Object }>()
);
