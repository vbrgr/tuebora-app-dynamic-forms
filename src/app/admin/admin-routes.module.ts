import { Routes } from '@angular/router';
import { MainrootComponent } from './mainroot/mainroot.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserPreferencesComponent } from './user-preferences/user-preferences.component';
import { UserDynamicFormComponent } from './user-dynamic-form/user-dynamic-form.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'user-preferences',
    component: UserPreferencesComponent,
  },
  {
    path: 'user-dynamic-form',
    component: UserDynamicFormComponent,
  }
]
