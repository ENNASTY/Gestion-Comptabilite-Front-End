import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TauxIrListComponent } from './taux-ir-list.component';

describe('TauxIrListComponent', () => {
  let component: TauxIrListComponent;
  let fixture: ComponentFixture<TauxIrListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TauxIrListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TauxIrListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
