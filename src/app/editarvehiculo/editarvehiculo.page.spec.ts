import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarvehiculoPage } from './editarvehiculo.page';

describe('EditarvehiculoPage', () => {
  let component: EditarvehiculoPage;
  let fixture: ComponentFixture<EditarvehiculoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarvehiculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
