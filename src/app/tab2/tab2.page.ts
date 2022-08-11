import { Component } from '@angular/core';
import { Flashlight } from '@awesome-cordova-plugins/flashlight/ngx';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { Calendar } from '@awesome-cordova-plugins/calendar/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
lat:any;
long:any;
  constructor(private calendar:Calendar, private flashlight:Flashlight, private geolocation:Geolocation) {}

  Flashlight() {
    this.flashlight.toggle();
  }

  GPS(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.long = resp.coords.longitude;
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  Calendar(){
    this.calendar.createCalendar('MyCalendar').then(
      (msg) => { console.log(msg); },
      (err) => { console.log(err); }
    );
  }

  numberofTime:number = 0;

  count(){
    this.numberofTime++;
  }
}
