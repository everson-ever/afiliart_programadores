import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarProgramadorComponent } from './cadastrar-programador.component';

describe('CadastrarProgramadorComponent', () => {
  let component: CadastrarProgramadorComponent;
  let fixture: ComponentFixture<CadastrarProgramadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarProgramadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarProgramadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
