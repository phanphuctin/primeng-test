import { NgModule } from '@angular/core';
import { TerminalComponent } from './terminal.component';
import { CommonModule } from '@angular/common';
import { TerminalRoutingModule } from './terminal-routing.module';
import { ButtonModule } from 'primeng/button';
import { TerminalModule } from 'primeng/terminal';
import { DynamicDialogTerminalComponent } from './dynamic-dialog-terminal/dynamic-dialog-terminal.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

@NgModule({
  declarations: [TerminalComponent, DynamicDialogTerminalComponent],
  imports: [
    CommonModule,
    TerminalRoutingModule,
    ButtonModule,
    TerminalModule,
    DynamicDialogModule,
  ],
  exports: [],
  providers: [],
})
export class TerminalGeneralModule {}
