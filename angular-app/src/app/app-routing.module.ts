import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../app/component/dashboard/dashboard.component';
import { SnsTesterComponent } from '../app/component/sns-tester/sns-tester.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sns', component: SnsTesterComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
