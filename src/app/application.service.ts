import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { delay, map, filter, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ApplicationService {
  constructor(private http: HttpClient) {}

  fakeResponse = [
    {
      password: "password"
    },
    {
      password: "password123"
    }
  ];

  validatePassword(input: string): Observable<Object> {
    return of(this.fakeResponse).pipe(
      delay(1000),
      map(passwords => passwords.filter(p => +p.password === +input)),
      tap(psCodes => console.log("In service " + JSON.stringify(psCodes))),
      tap(psCodes => console.log("In service " + !!psCodes.length)),
      map(passwords => passwords[0])
    );
  }
}
