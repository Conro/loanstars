import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { routerTransition } from './animations/router.animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [routerTransition]
})
export class AppComponent {

  constructor(public auth: AuthService) { }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
