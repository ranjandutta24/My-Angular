import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonpostComponent } from './jsonpost.component';

describe('JsonpostComponent', () => {
  let component: JsonpostComponent;
  let fixture: ComponentFixture<JsonpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
