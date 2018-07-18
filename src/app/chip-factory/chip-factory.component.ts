import { Component, OnInit } from '@angular/core';
import { ChipsService } from '../services/chips.service';
import { TagEditService } from '../services/tag-edit.service';
import { DACT, ACT, StoryService } from '../services/story.service';
import { anies } from '../animation/animation';

const START = '開始';
const END = '終了';

@Component({
  selector: 'app-chip-factory',
  templateUrl: './chip-factory.component.html',
  styleUrls: ['./chip-factory.component.css'],
  animations: anies
})
export class ChipFactoryComponent implements OnInit {

  private next = false;

  constructor(private service: ChipsService, private service2: TagEditService, private ss: StoryService) { }

  storyState = START;
  exebt = this.ss.sigh();
  fnibt = this.ss.sigh();
  edibt = this.ss.sigh();

  ngOnInit() {
  }

  edit() {
    for (let i = 0; i < this.service.value2.length; i++) {
      for (let j = 0; j < this.service.value2[i].length; j++) {
        this.service.value2[i][j] = 'aa';
      }
    }
    this.service2.value = !this.service2.value;
  }

  clear() {
    this.service.clear();
  }

  storyStart() {
    this.storyState = this.storyState === START ? END : START;
    this.ss.modalToggle();
    this.next = !this.next;
  }

  nextSection() { this.ss.next(); }

}
