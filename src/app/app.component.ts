import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { interval, of, Subscription } from 'rxjs';

import { capTypeValues,responseType } from './models/cap.inteface'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'assignment';
  smallCaps:capTypeValues[] = [];
  largeCaps:capTypeValues[] = [];
  $intervalSub!:Subscription;
  constructor(private http:HttpClient){}
  
  ngOnInit(){
    this.fetchCapData();
    this.$intervalSub = interval(60 * 1000).subscribe(()=>{
       this.fetchCapData();
    })
  }

  fetchCapData(){
    this.http.get<responseType>('../assets/small-cap-lar-cap.json')
      .subscribe(response => {
         const { value } = response;
         this.smallCaps = this.sort(value.filter(item=>(item.isSmallCap === 'Y')));
         this.largeCaps = this.sort(value.filter(item=>(item.isSmallCap === 'N')));
      });
  }

  sort(values:capTypeValues[]):capTypeValues[] {
    return values.sort((a, b) => {
      let firstValue = a.name.toLowerCase(),
          secondValue = b.name.toLowerCase();
  
      if (firstValue < secondValue) {
          return -1;
      }
      if (firstValue > secondValue) {
          return 1;
      }
      return 0;
  });
  }
}


