import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { AuthService } from "src/app/seguranca/services/auth.service";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  @Output() closeMenu = new EventEmitter();
  @Input() active;

  constructor(public authService: AuthService) {}

  ngOnInit() {}

  public eventClose(event) {
    if (event.target.id === "close") {
      this.closeMenu.emit("false");
    }
  }
}
