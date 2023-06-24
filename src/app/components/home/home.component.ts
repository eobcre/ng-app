import { Component } from '@angular/core';
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;
  faGithub = faGithub;
}
