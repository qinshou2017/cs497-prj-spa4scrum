import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrjInfoComponent } from './prj-info.component';

describe('PrjInfoComponent', () => {
  let component: PrjInfoComponent;
  let fixture: ComponentFixture<PrjInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrjInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrjInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
