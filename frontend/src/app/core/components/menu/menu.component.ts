import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { AuthService } from "src/app/seguranca/services/auth.service";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  @Input() active;
  @Output() closeMenu = new EventEmitter();

  constructor(public authService: AuthService) {}

  ngOnInit() {}

  public eventClose() {
    this.closeMenu.emit("false");
  }
}
