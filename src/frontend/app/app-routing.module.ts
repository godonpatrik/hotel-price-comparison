import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {WeatherFormComponent} from './weather-form/weather-form.component';
import {HotelFormComponent} from './hotel-form/hotel-form.component';
import {MySearchesComponent} from './my-searches/my-searches.component';
import {PlacesFormComponent} from './places-form/places-form.component';

import {AuthGuard} from './auth.guard';
import {AboutMeComponent} from "./about-me/about-me.component";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'homepage',
    component: HomePageComponent
  },
  {
    path: 'weatherForm',
    component: WeatherFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'placesForm',
    component: PlacesFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'hotelForm',
    component: HotelFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'mySearches',
    component: MySearchesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'aboutMe',
    component: AboutMeComponent,
    canActivate: [AuthGuard]
  },
  {path: '**', redirectTo: 'homepage'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
