import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TauxIsViewComponent } from './taux-is-view.component';

describe('TauxIsViewComponent', () => {
  let component: TauxIsViewComponent;
  let fixture: ComponentFixture<TauxIsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TauxIsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TauxIsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
