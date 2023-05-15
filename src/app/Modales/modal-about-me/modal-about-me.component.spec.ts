import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAboutMeComponent } from './modal-about-me.component';

describe('ModalAboutMeComponent', () => {
  let component: ModalAboutMeComponent;
  let fixture: ComponentFixture<ModalAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAboutMeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
