import { Routes } from '@angular/router';
import { RegFormComponent } from './reg-form/reg-form';

export const routes: Routes = [
	{ path: '', component: RegFormComponent },
	{ path: 'form', component: RegFormComponent }
];
