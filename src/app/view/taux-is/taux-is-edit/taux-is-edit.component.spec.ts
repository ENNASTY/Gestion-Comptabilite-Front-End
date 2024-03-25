import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TauxIsEditComponent } from './taux-is-edit.component';

describe('TauxIsEditComponent', () => {
  let component: TauxIsEditComponent;
  let fixture: ComponentFixture<TauxIsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TauxIsEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TauxIsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
