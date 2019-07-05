import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartVegaComponent } from './chart-vega.component';

describe('ChartVegaComponent', () => {
  let component: ChartVegaComponent;
  let fixture: ComponentFixture<ChartVegaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartVegaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartVegaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
