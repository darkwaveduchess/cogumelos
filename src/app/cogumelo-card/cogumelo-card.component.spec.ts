import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CogumeloCardComponent } from './cogumelo-card.component';

describe('CogumeloCardComponent', () => {
  let component: CogumeloCardComponent;
  let fixture: ComponentFixture<CogumeloCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CogumeloCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CogumeloCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
