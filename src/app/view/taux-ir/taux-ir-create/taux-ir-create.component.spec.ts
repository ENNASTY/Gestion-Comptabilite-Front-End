import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TauxIrCreateComponent } from './taux-ir-create.component';

describe('TauxIrCreateComponent', () => {
  let component: TauxIrCreateComponent;
  let fixture: ComponentFixture<TauxIrCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TauxIrCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TauxIrCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
