import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public email: string;
  public senha: string;

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  public login(form: NgForm) {
    this.authService.login(this.email, this.senha);
  }
}
