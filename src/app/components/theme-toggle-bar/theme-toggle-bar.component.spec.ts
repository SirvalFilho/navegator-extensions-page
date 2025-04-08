import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeToggleBarComponent } from './theme-toggle-bar.component';

describe('ThemeToggleBarComponent', () => {
  let component: ThemeToggleBarComponent;
  let fixture: ComponentFixture<ThemeToggleBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThemeToggleBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeToggleBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
