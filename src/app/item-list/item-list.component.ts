import { Component, OnInit } from '@angular/core';
import { ChapterService } from './chapter.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  providers: [ ChapterService ]
})
export class ItemListComponent implements OnInit {

  items: string[];

  constructor(private service: ChapterService) {
    this.items = service.itemList;
  }

  ngOnInit() {
  }

  dragstartE() {}

  dragoverE() {}

  dropE() {}

  dragendE() {}

}
