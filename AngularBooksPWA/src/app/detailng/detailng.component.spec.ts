import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailngComponent } from './detailng.component';

describe('DetailngComponent', () => {
  let component: DetailngComponent;
  let fixture: ComponentFixture<DetailngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
