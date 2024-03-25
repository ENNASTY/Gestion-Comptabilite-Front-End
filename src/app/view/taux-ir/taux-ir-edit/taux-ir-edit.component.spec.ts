import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TauxIrEditComponent } from './taux-ir-edit.component';

describe('TauxIrEditComponent', () => {
  let component: TauxIrEditComponent;
  let fixture: ComponentFixture<TauxIrEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TauxIrEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TauxIrEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
