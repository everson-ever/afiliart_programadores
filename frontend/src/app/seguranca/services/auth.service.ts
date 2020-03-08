import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  public jwtPayload: any;
  public jwtHelperService: JwtHelperService;

  constructor(private http: HttpClient) {
    this.jwtHelperService = new JwtHelperService();
    this.reloadToken();
  }

  public login(email: string, senha: string): Promise<void> {
    return this.http
      .post("http://localhost:3000/api/auth", { email, senha })
      .toPromise()
      .then((response: any) => {
        this.storeToken(response.data.token);
      })
      .catch(err => {
        console.log(err);
      });
  }

  public storeToken(token: string) {
    this.jwtPayload = this.jwtHelperService.decodeToken(token);

    localStorage.setItem("token", token);
  }

  public reloadToken() {
    const token = localStorage.getItem("token");

    if (token) {
      this.storeToken(token);
    }
  }
}
