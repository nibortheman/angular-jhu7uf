import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { FormGroupState } from "ngrx-forms";
import { Observable } from "rxjs/Observable";
import { AppState, MyFormValue } from "./login.reducer";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html"
})
export class LoginComponent {
  formState$: Observable<FormGroupState<MyFormValue>>;

  constructor(private store: Store<AppState>) {
    this.formState$ = store.select(s => s.myForm);
  }
}
