import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertypageComponent } from './propertypage.component';

describe('PropertypageComponent', () => {
  let component: PropertypageComponent;
  let fixture: ComponentFixture<PropertypageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertypageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
