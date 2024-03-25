import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TauxIrViewComponent } from './taux-ir-view.component';

describe('TauxIrViewComponent', () => {
  let component: TauxIrViewComponent;
  let fixture: ComponentFixture<TauxIrViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TauxIrViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TauxIrViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
