import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearBicicletaComponent } from './crear-bicicleta.component';

describe('CrearBicicletaComponent', () => {
  let component: CrearBicicletaComponent;
  let fixture: ComponentFixture<CrearBicicletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearBicicletaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearBicicletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
