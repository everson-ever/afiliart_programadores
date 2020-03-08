import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProgramadoresComponent } from './lista-programadores.component';

describe('ListaProgramadoresComponent', () => {
  let component: ListaProgramadoresComponent;
  let fixture: ComponentFixture<ListaProgramadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaProgramadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProgramadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
