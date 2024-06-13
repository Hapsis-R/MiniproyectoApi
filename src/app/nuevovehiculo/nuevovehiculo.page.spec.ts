import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevovehiculoPage } from './nuevovehiculo.page';

describe('NuevovehiculoPage', () => {
  let component: NuevovehiculoPage;
  let fixture: ComponentFixture<NuevovehiculoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevovehiculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
