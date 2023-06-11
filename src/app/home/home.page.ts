import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ScrollLineComponent } from '../scroll-line/scroll-line.component';
import { RouterModule } from '@angular/router';
import { ProjectImageComponent } from "./project-image/project-image.component";
import { ProjectInfoComponent } from "./project-info/project-info.component";
import { Project } from '../models/project.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    IonicModule,
    ScrollLineComponent,
    RouterModule,
    ProjectImageComponent,
    ProjectInfoComponent,
    HttpClientModule,
    CommonModule,
    ExperienceComponent,
    ContactComponent
  ]
})
export class HomePage implements OnInit {

  lineHeight: number = 1300;
  offset: number = 1100;
  lineInitialPosition: number = (document.documentElement.clientHeight / 2) + 100;
  projects: Project[] | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.importProjectsJson();
  }

  async importProjectsJson() {
    this.projects = await lastValueFrom(this.http.get<Project[]>('assets/projects.json'));
    console.log(this.projects);
  }

}
