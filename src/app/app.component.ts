import { Component } from '@angular/core';
import { DACT, ACT, StoryService } from './services/story.service';
import { anies } from './animation/animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: anies
})
export class AppComponent {

  constructor(private ss: StoryService) { }

  private modalToggle() { this.ss.modalToggle(); }
}
