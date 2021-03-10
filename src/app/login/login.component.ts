import { Component, Input } from "@angular/core";
import { Store } from "@ngrx/store";
import {
  FormBuilder,
  FormControl,
  Validators,
  AbstractControl
} from "@angular/forms";
//import { Observable } from 'rxjs';
import { take, map, tap, shareReplay } from "rxjs/operators";
import * as ApplicationActions from "../application.actions";
import * as fromReducers from "../index.reducer";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  @Input() control: FormControl;

  constructor(
    private store: Store<fromReducers.State>,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.control.setAsyncValidators(this.passwordValidator.bind(this));
  }

  passwordValidator(control: AbstractControl) {
    this.store.dispatch(ApplicationActions.setPassword({ password: null }));

    this.store.dispatch(
      ApplicationActions.getPassword({ currPassword: control.value })
    );

    return this.store
      .select(fromReducers.getPassword)
      .pipe(take(1))
      .pipe(
        map(v => {
          console.log(JSON.stringify(v));
          return v ? null : { invalidPass: true };
        })
      );
  }
}
