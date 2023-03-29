import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationISListComponent } from './declaration-is-list.component';

describe('DeclarationISListComponent', () => {
  let component: DeclarationISListComponent;
  let fixture: ComponentFixture<DeclarationISListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclarationISListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeclarationISListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
