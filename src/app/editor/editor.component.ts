import { Component, OnInit } from '@angular/core';
import { ChipsService } from '../services/chips.service';
import { TagEditService } from '../services/tag-edit.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  items: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  isDropped = false;

  constructor(private service1: ChipsService, private service2: TagEditService) { }

  ngOnInit() { }

  private dragstartE(event, item) {
    event.dataTransfer.setData('text/plain', item);
    this.service1.tagDrag = true;
  }

  private dragoverE(event) {
    if (this.service1.tagDrag) {
      event.preventDefault();
    }
  }

  private dropE(event, i) {
    this.service1.add(event.dataTransfer.getData('text/plain'), i);
    this.isDropped = true;
  }

  private dragendE(i, j) {
    if (this.isDropped) {
      this.service1.searchAndDestroy(i, j);
    }
    this.service1.tagDrag = false;
    this.isDropped = false;
  }

  public searchAndDestroy(i, j) {
    this.service1.searchAndDestroy(i, j);
  }
}
