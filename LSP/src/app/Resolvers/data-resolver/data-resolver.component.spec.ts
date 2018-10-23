import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataResolverComponent } from './data-resolver.component';

describe('DataResolverComponent', () => {
  let component: DataResolverComponent;
  let fixture: ComponentFixture<DataResolverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataResolverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataResolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
