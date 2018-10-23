import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoInputFormComponent } from './two-input-form.component';

describe('TwoInputFormComponent', () => {
  let component: TwoInputFormComponent;
  let fixture: ComponentFixture<TwoInputFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoInputFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
