import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevarevisionPage } from './nuevarevision.page';

describe('NuevarevisionPage', () => {
  let component: NuevarevisionPage;
  let fixture: ComponentFixture<NuevarevisionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevarevisionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
