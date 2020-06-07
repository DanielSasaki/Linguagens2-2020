import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessoresAngularCliComponent } from './professores-angular-cli.component';

describe('ProfessoresAngularCliComponent', () => {
  let component: ProfessoresAngularCliComponent;
  let fixture: ComponentFixture<ProfessoresAngularCliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessoresAngularCliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessoresAngularCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
