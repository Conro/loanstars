import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../animations/router.animations'

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css'],
  animations: [routerTransition]
})
export class NewFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
