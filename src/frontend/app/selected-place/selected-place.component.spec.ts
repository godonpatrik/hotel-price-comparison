import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedPlaceComponent } from './selected-place.component';

describe('SelectedPlaceComponent', () => {
  let component: SelectedPlaceComponent;
  let fixture: ComponentFixture<SelectedPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
