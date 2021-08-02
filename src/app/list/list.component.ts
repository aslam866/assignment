import { Component, Input, OnInit } from '@angular/core';
import { capTypeValues } from '../models/cap.inteface'; 

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor() { }
  @Input() data:capTypeValues[] = [];
  ngOnInit(): void {
  }

  trackByFn(index:number,item:capTypeValues){
    return item.currentValue;
  }

}
