import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipFactoryComponent } from './chip-factory.component';

describe('ChipFactoryComponent', () => {
  let component: ChipFactoryComponent;
  let fixture: ComponentFixture<ChipFactoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChipFactoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
