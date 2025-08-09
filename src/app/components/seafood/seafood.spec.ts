import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seafood } from './seafood';

describe('Seafood', () => {
  let component: Seafood;
  let fixture: ComponentFixture<Seafood>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Seafood]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Seafood);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
