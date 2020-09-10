import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditBoardComponent } from './add-or-edit-board.component';

describe('AddOrEditBoardComponent', () => {
  let component: AddOrEditBoardComponent;
  let fixture: ComponentFixture<AddOrEditBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrEditBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrEditBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
