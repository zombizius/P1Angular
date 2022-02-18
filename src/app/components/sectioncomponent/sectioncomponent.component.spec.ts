import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectioncomponentComponent } from './sectioncomponent.component';

describe('SectioncomponentComponent', () => {
  let component: SectioncomponentComponent;
  let fixture: ComponentFixture<SectioncomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectioncomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectioncomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
