import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMaapsComponent } from './about-maaps.component';

describe('AboutMaapsComponent', () => {
  let component: AboutMaapsComponent;
  let fixture: ComponentFixture<AboutMaapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutMaapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMaapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
