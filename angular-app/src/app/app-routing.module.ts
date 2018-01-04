import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { SnsTesterComponent } from './component/sns-tester/sns-tester.component';
import { SnsMessageComponent } from './component/sns-message/sns-message.component';
import { SnsTopicComponent } from './component/sns-topic/sns-topic.component';
import { SnsSubscribeComponent } from './component/sns-subscribe/sns-subscribe.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sns', component: SnsTesterComponent },
  { path: 'sns-message', component: SnsMessageComponent },
  { path: 'sns-topic', component: SnsTopicComponent },
  { path: 'sns-subscribe', component: SnsSubscribeComponent},
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
