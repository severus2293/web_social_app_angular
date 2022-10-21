import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoksComponent } from './stoks.component';

describe('StoksComponent', () => {
  let component: StoksComponent;
  let fixture: ComponentFixture<StoksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
