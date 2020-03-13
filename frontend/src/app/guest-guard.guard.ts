import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './seguranca/services/auth.service';

@Injectable({
	providedIn: 'root'
})
export class GuestGuardGuard implements CanActivate {
	constructor(private router: Router, private authService: AuthService) {}

	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		try {
			if (this.authService.logged()) {
				this.router.navigate([ '/home' ]);
				return false;
			} else {
				return true;
			}
		} catch (e) {
			return;
		}
	}
}
