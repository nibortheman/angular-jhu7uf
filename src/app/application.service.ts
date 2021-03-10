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
    {}
  ];

  validatePassword(input: string): Observable<Object> {
    return of(this.fakeResponse).pipe(
      delay(1000),
      
    );
  }
}
