import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  public activeMenu = false;

  ngOnInit() {}

  public controlMenu() {
    this.activeMenu = !this.activeMenu;
  }
}
