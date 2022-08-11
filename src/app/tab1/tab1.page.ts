import { Component } from '@angular/core';
import {FourZeroNineService} from '../Services/four-zero-nine.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
FourZeroNineTimeTable:any = [];

  constructor(private fourZeroNineService:FourZeroNineService) {}

  ngOnInit(){
    this.fourZeroNineService.GetFourZeroNine().subscribe(
      (data)=>{
        this.FourZeroNineTimeTable = data.results;
        console.log(data.results);//.route_short_name);
      }
    );
  }

}
