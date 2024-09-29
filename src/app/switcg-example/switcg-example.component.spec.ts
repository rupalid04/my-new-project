import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitcgExampleComponent } from './switcg-example.component';

describe('SwitcgExampleComponent', () => {
  let component: SwitcgExampleComponent;
  let fixture: ComponentFixture<SwitcgExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwitcgExampleComponent]
    });
    fixture = TestBed.createComponent(SwitcgExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
