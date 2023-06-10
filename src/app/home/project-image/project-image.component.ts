import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'project-image',
  templateUrl: './project-image.component.html',
  styleUrls: ['./project-image.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class ProjectImageComponent implements OnInit {

  @Input() image: string | undefined;

  constructor() { }

  ngOnInit() { }

}
