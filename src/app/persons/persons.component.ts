import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {
  msg = 'this is person'
  constructor() { }

  ngOnInit() {
  }

  changeMsg() {
    this.msg = 'button clicked'
  }

}
