import { Component } from '@angular/core';
import { skillData } from 'src/skillData';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  skillData = skillData;
}
