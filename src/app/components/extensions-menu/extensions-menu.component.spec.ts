import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionsMenuComponent } from './extensions-menu.component';

describe('ExtensionsMenuComponent', () => {
  let component: ExtensionsMenuComponent;
  let fixture: ComponentFixture<ExtensionsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExtensionsMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtensionsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
