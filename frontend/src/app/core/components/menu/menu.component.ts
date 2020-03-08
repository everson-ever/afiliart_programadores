import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  @Input() active;
  @Output() closeMenu = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public eventClose() {
    this.closeMenu.emit("false");
  }
}
