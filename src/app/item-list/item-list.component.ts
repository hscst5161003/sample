import { Component, OnInit } from '@angular/core';
import { ChapterService } from './chapter.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  providers: [ChapterService]
})
export class ItemListComponent implements OnInit {

  items: string[];
  madeItems: string[];
  newElementName: string;
  madeItemIdx: number;

  constructor(private service: ChapterService) {
    this.items = service.itemList;
    this.newElementName = '';
    this.madeItems = [];
    this.madeItemIdx = -1;
  }

  ngOnInit() {
  }

  dragstartE(event, item) {
    event.dataTransfer.setData('text/plain', item);
  }

  dragoverE() { }

  dropE() { }

  dragendE() { }

  createElement() {
    if (this.newElementName.length !== 0) {
      this.madeItems.push(this.newElementName);
      this.newElementName = '';
    }
  }

  selectedElement(idx) {
    this.madeItemIdx = idx;
  }

  deleteElement() {
    if (this.madeItemIdx !== -1) {
      this.madeItems.splice(this.madeItemIdx - 1, 1);
    }
    this.madeItemIdx = -1;
  }

}
