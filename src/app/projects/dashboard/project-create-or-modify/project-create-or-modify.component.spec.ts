import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCreateOrModifyComponent } from './project-create-or-modify.component';

describe('ProjectCreateOrModifyComponent', () => {
  let component: ProjectCreateOrModifyComponent;
  let fixture: ComponentFixture<ProjectCreateOrModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectCreateOrModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCreateOrModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
