import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { Flashlight } from '@awesome-cordova-plugins/flashlight/ngx';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { Calendar } from '@awesome-cordova-plugins/calendar/ngx';

import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [FormsModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [Calendar,Geolocation, Flashlight, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}