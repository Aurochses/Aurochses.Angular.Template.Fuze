import { Component } from '@angular/core';

import { SplashScreenService } from '@aurochses/angular-splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'demo';

  constructor(
    private splashScreenService: SplashScreenService
  ) {

  }

}
