import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  items: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  chips: string[][] = [[], [], [], [], [], [], [], [], [], [], [], []];
  removable = true;

  constructor() { }

  ngOnInit() {
  }

}
