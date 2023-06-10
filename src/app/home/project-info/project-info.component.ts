import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class ProjectInfoComponent implements OnInit {

  @Input() project: Project | undefined;

  constructor() { }

  ngOnInit() { }

}
