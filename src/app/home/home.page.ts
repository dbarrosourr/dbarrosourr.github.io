import { Component, ViewEncapsulation } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ScrollLineComponent } from '../scroll-line/scroll-line.component';
import { RouterModule } from '@angular/router';
import { ProjectImageComponent } from "./project-image/project-image.component";
import { ProjectInfoComponent } from "./project-info/project-info.component";
import { Project } from '../models/project.model';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [IonicModule, ScrollLineComponent, RouterModule, ProjectImageComponent, ProjectInfoComponent]
})
export class HomePage {

  lineHeight: number = 1175;
  lineInitialPosition: number = (document.documentElement.clientHeight / 2) + 100;
  projects: Project[] = [];

  constructor() {
    this.projects.push(new Project("HighTracks", "Mainly the app can be described as a Search, Insertion and rating of songs which can be added looking for those in Spotify API. Also, it offers recommendations based on GPT 3.5.", "2023", ["Angular", "Ionic", "Docker", "Firebase"], "../../assets/hightracks.png"));
  }

}
