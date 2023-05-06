import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBicicletaComponent } from './update-bicicleta.component';

describe('UpdateBicicletaComponent', () => {
  let component: UpdateBicicletaComponent;
  let fixture: ComponentFixture<UpdateBicicletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBicicletaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBicicletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
