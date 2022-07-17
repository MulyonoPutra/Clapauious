import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/authentication/login/login.module').then(
        (m) => m.LoginModule
      ),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./modules/authentication/register/register.module').then(
        (m) => m.RegisterModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./modules/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'subscription',
    loadChildren: () =>
      import('./modules/subscription/subscription.module').then(
        (m) => m.SubscriptionModule
      ),
  },
  {
    path: 'payment',
    loadChildren: () =>
      import('./modules/payment/payment.module').then((m) => m.PaymentModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
