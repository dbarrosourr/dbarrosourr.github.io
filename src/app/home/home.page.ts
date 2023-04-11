import { Component, ViewEncapsulation } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ScrollLineComponent } from '../scroll-line/scroll-line.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, ScrollLineComponent, RouterModule],
  encapsulation: ViewEncapsulation.None
})
export class HomePage {

  lineHeight: number = 500;
  lineInitialPosition: number = (document.documentElement.clientHeight / 2) + 150;

  constructor() {
  }

}
