import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
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
    private toastr: ToastrService
  ) {}

  ngOnInit() {}

  public login(form: NgForm) {
    this.authService
      .login(this.email, this.senha)
      .then(() => {
        console.log("Logado");
      })
      .catch(err => {
        this.toastr.error(err);
      });
  }
}
