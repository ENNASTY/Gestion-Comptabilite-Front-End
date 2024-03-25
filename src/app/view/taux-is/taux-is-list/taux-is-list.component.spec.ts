import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TauxIsListComponent } from './taux-is-list.component';

describe('TauxIsListComponent', () => {
  let component: TauxIsListComponent;
  let fixture: ComponentFixture<TauxIsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TauxIsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TauxIsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
