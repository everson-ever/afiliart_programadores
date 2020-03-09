import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  public url = "http://localhost:3000/api";

  constructor() {}
}
