import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class UserService {
  readonly url = "https://jsonplaceholder.typicode.com/users";

  constructor(private httpClient: HttpClient) {}

  fetchAll(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url);
  }

  deleteUser(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }
}
