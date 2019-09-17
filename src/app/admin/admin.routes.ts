import { Routes } from '@angular/router';
import { MainrootComponent } from './mainroot/mainroot.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserPreferencesComponent } from './user-preferences/user-preferences.component';
export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'user-preferences',
    component: UserPreferencesComponent,
  }

]
