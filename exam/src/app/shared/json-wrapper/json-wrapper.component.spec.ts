import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonWrapperComponent } from './json-wrapper.component';

describe('JsonWrapperComponent', () => {
  let component: JsonWrapperComponent;
  let fixture: ComponentFixture<JsonWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
