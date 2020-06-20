import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosAngularCliComponent } from './cursos-angular-cli.component';

describe('CursosAngularCliComponent', () => {
  let component: CursosAngularCliComponent;
  let fixture: ComponentFixture<CursosAngularCliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosAngularCliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosAngularCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
