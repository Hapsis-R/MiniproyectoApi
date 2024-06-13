import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RevisionesPage } from './revisiones.page';

describe('RevisionesPage', () => {
  let component: RevisionesPage;
  let fixture: ComponentFixture<RevisionesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RevisionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
