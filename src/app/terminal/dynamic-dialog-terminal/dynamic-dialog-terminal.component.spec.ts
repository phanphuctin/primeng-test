import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDialogTerminalComponent } from './dynamic-dialog-terminal.component';

describe('DynamicDialogTerminalComponent', () => {
  let component: DynamicDialogTerminalComponent;
  let fixture: ComponentFixture<DynamicDialogTerminalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicDialogTerminalComponent]
    });
    fixture = TestBed.createComponent(DynamicDialogTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
