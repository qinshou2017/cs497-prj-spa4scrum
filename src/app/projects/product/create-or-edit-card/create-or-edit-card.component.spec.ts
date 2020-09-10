import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrEditCardComponent } from './create-or-edit-card.component';

describe('CreateOrEditCardComponent', () => {
  let component: CreateOrEditCardComponent;
  let fixture: ComponentFixture<CreateOrEditCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOrEditCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrEditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
