import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";
import { ApplicationService } from "./application.service";
import * as ApplicationActions from "./application.actions";

@Injectable()
export class ApplicationEffects {
  constructor(
    private actions$: Actions,
    private applicationService: ApplicationService
  ) {}

  validatePass$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ApplicationActions.getPassword),
      switchMap(action =>
        this.applicationService
          .validatePassword(action.password)
          .pipe(
            map(password =>
              ApplicationActions.setPassword({ password: password || {} })
            )
          )
      )
    )
  );
}
