import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './auth-guard.guard';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [ { path: 'home', component: HomeComponent, canActivate: [ AuthguardGuard ] } ];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
