import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { StoreModule } from "@ngrx/store";
import { LoginComponent } from "./login/login.component";
import { ROOT_REDUCERS, metaReducers } from "./index.reducer";
import { EffectsModule } from "@ngrx/effects";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ApplicationEffects } from "./application.effects";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(ROOT_REDUCERS, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true
      }
    }),
    EffectsModule.forRoot([ApplicationEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
