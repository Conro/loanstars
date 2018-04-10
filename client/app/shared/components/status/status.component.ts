import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  @Input('status') status: string;
  color: string;

  constructor() { }

  ngOnInit() {
    switch(this.status){
      case 'approved':
        this.color = 'green';
      break;

      case 'canceled':
        this.color = 'purple';
      break;

      case 'submitted':
        this.color = 'blue';
      break;

      case 'declined':
        this.color = 'red';
      break;

      case 'incomplete':
        this.color = 'orange';
      break;

      case 'pending':
        this.color = 'blue';
      break;
    }
  }

}
