import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatMenuModule,
  MatTableModule
} from '@angular/material';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ToastrModule} from 'ngx-toastr';
import {NgxSpinnerModule} from "ngx-spinner";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomePageComponent} from './home-page/home-page.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {WeatherFormComponent} from './weather-form/weather-form.component';
import {WeatherDetailsService} from './weather-details/weather-details.service';
import {HotelFormComponent} from './hotel-form/hotel-form.component';
import {HotelFormService} from './hotel-form/hotel-form.service';
import {ChartComponent} from './chart/chart.component';
import {MySearchesComponent} from './my-searches/my-searches.component';
import {PlacesFormComponent} from './places-form/places-form.component';
import {WeatherDetailsComponent} from './weather-details/weather-details.component';
import {PlacesDetailsComponent} from './places-details/places-details.component';
import {HotelDetailsComponent} from './hotel-details/hotel-details.component';
import {TokenInterceptor} from "./token.interceptor";
import {SelectedPlaceComponent} from './selected-place/selected-place.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    RegisterComponent,
    WeatherFormComponent,
    HotelFormComponent,
    ChartComponent,
    MySearchesComponent,
    PlacesFormComponent,
    WeatherDetailsComponent,
    PlacesDetailsComponent,
    HotelDetailsComponent,
    SelectedPlaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FlexLayoutModule,
    MatTableModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule
  ],
  providers: [WeatherDetailsService, HotelFormService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
