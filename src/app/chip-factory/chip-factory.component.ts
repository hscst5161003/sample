import { Component, OnInit } from '@angular/core';
import { ChipsService } from '../services/chips.service';
import { TagEditService } from '../services/tag-edit.service';

@Component({
  selector: 'app-chip-factory',
  templateUrl: './chip-factory.component.html',
  styleUrls: ['./chip-factory.component.css']
})
export class ChipFactoryComponent implements OnInit {

  constructor(private service: ChipsService, private service2: TagEditService) { }

  ngOnInit() {
  }

  edit() {
    for (let i = 0; i < this.service.value2.length; i++) {
      for (let j = 0; j < this.service.value2[i].length; j++) {
        this.service.value2[i][j] = 'aa';
      }
    }
    this.service2.value = this.service2.value ? false : true;
  }

  clear() {
    this.service.clear();
  }

}
