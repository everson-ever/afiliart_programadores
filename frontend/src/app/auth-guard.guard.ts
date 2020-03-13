import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './seguranca/services/auth.service';

@Injectable({
	providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
	constructor(private router: Router, private authService: AuthService) {}

	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		try {
			if (this.authService.logged()) {
				return true;
			} else {
				this.router.navigate([ '/login' ]);
				return false;
			}
		} catch (e) {
			return;
		}
	}
}
