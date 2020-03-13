import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/seguranca/services/auth.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: [ './navbar.component.css' ]
})
export class NavbarComponent implements OnInit {
	public activeMenu = false;

	constructor(public authService: AuthService) {}

	ngOnInit() {}

	public controlMenu() {
		this.activeMenu = !this.activeMenu;
	}
}
