import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { ErrorHandlerService } from "src/app/core/services/error-handler.service";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public email: string;
  public senha: string;

  constructor(
    private authService: AuthService,
    private errorHandlerService: ErrorHandlerService,
    private router: Router
  ) {}

  ngOnInit() {}

  public login(form: NgForm) {
    this.authService
      .login(this.email, this.senha)
      .then(() => {
        this.router.navigate(["/home"]);
      })
      .catch(err => {
        this.errorHandlerService.handler(err);
        this.senha = null;
      });
  }
}
