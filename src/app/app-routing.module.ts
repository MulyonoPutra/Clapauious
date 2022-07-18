import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokenGuard } from './core/guard/token.guard';

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
    canActivate: [TokenGuard],
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
    canActivate: [TokenGuard],
  },
  {
    path: 'movie-details/:id',
    loadChildren: () =>
      import('./modules/movie-details/movie-details.module').then(
        (m) => m.MovieDetailsModule
      ),
    canActivate: [TokenGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
