import { Injectable } from '@angular/core';

export const DACT = 'dact';
export const ACT = 'act';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  private zidxs = [];
  private one = 'one';
  private two = 'two';
  private three = 'three';
  private modalSW = DACT;

  private ovstate = ['1', '1', '1', '1'];
  private idx = 0;

  constructor() { }

  public setZidx(value: string): number {
    const re = this.zidxs.length;
    this.zidxs.push(value);
    return re;
  }

  public getZidx(idx: number) { return this.zidxs[idx]; }

  public get value1(): string { return this.one; }

  public get value2(): string { return this.two; }

  public get value3(): string { return this.three; }

  public modalToggle() { this.modalSW = this.modalSW === ACT ? DACT : ACT; }

  public get modalsw(): string { return this.modalSW; }

  public next() {
    this.ovstate[this.idx] = 's1';
    this.idx = this.idx + 1;
    this.idx = this.idx % this.ovstate.length;
    this.ovstate[this.idx] = 's3';
  }
  public get state1(): string { return this.ovstate[0]; }
  public get state2(): string { return this.ovstate[1]; }
  public get state3(): string { return this.ovstate[2]; }

}
