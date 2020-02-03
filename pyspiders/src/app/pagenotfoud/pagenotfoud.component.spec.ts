import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenotfoudComponent } from './pagenotfoud.component';

describe('PagenotfoudComponent', () => {
  let component: PagenotfoudComponent;
  let fixture: ComponentFixture<PagenotfoudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagenotfoudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagenotfoudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
