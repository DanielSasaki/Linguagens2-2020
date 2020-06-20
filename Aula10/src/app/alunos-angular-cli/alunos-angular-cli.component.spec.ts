import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunosAngularCliComponent } from './alunos-angular-cli.component';

describe('AlunosAngularCliComponent', () => {
  let component: AlunosAngularCliComponent;
  let fixture: ComponentFixture<AlunosAngularCliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunosAngularCliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunosAngularCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
