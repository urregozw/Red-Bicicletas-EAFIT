import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarBicicletaComponent } from './mostrar-bicicleta.component';

describe('MostrarBicicletaComponent', () => {
  let component: MostrarBicicletaComponent;
  let fixture: ComponentFixture<MostrarBicicletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarBicicletaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarBicicletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
