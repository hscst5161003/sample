import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChipsService {

  private chips: string[][] = [[], [], [], [], [], [], [], [], [], [], [], []];
  private isTagDrag = false;

  constructor() { }

  add(str: string, i: number) {
    this.chips[i].push(str);
  }

  clear() {
    this.chips.forEach(element => element.length = 0);
  }

  searchAndDestroy(i, j) {
    this.chips[i].splice(j, 1);
  }


  public get value(): string[][] {
    return this.chips;
  }

  public get tagDrag(): boolean {
    return this.isTagDrag;
  }

  public set tagDrag(v: boolean) {
    this.isTagDrag = v;
  }

}
