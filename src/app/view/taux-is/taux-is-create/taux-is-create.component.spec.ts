import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TauxIsCreateComponent } from './taux-is-create.component';

describe('TauxIsCreateComponent', () => {
  let component: TauxIsCreateComponent;
  let fixture: ComponentFixture<TauxIsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TauxIsCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TauxIsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
