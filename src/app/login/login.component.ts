import { ChangeDetectionStrategy, Component } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { FormGroupState } from "ngrx-forms";
import { Observable } from "rxjs";

import { FormValue, State } from "./login.reducer";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  formState$: Observable<FormGroupState<FormValue>>;
  searchResults$: Observable<string[]>;

  constructor(store: Store<State>) {
    this.formState$ = store.pipe(select(s => s.asyncValidation.formState));
    this.searchResults$ = store.pipe(
      select(s => s.asyncValidation.searchResults)
    );
  }
}
