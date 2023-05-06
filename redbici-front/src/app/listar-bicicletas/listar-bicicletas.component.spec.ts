import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarBicicletasComponent } from './listar-bicicletas.component';

describe('ListarBicicletasComponent', () => {
  let component: ListarBicicletasComponent;
  let fixture: ComponentFixture<ListarBicicletasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarBicicletasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarBicicletasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
