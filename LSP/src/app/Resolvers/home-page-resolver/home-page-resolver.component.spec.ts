import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageResolverComponent } from './home-page-resolver.component';

describe('HomePageResolverComponent', () => {
  let component: HomePageResolverComponent;
  let fixture: ComponentFixture<HomePageResolverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageResolverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageResolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
