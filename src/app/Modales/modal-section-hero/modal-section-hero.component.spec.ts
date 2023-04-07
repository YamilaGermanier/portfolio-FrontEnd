import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSectionHeroComponent } from './modal-section-hero.component';

describe('ModalSectionHeroComponent', () => {
  let component: ModalSectionHeroComponent;
  let fixture: ComponentFixture<ModalSectionHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSectionHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSectionHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
