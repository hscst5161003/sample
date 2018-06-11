import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  lines: string[] = ['らんらんるー', 'エラー', 'gfd45345'];

  constructor() { }

  ngOnInit() {
  }

}
