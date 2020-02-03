import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiservicesComponent } from './apiservices.component';

describe('ApiservicesComponent', () => {
  let component: ApiservicesComponent;
  let fixture: ComponentFixture<ApiservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
