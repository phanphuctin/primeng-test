import { Component } from '@angular/core';
import { TerminalCommandService } from './terminal-command.service';
import { TerminalService } from 'primeng/terminal';
import { takeUntil } from 'rxjs';
import { DestroyService } from '../services/destroy.service';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss'],
  providers: [TerminalCommandService, TerminalService, DestroyService],
})
export class TerminalComponent {
  command: any;
  constructor(
    private terminalService: TerminalService,
    private destroy: DestroyService
  ) {
    this.terminalService.commandHandler
      .pipe(takeUntil(this.destroy.destroy$))
      .subscribe((command) => {
        const response = this.handleCommandResponse(command);
        this.terminalService.sendResponse(response);
      });
  }

  handleCommandResponse(command: string): any {
    this.command = command.toLocaleLowerCase();
    this.handleUserCommand(command);
    switch (command) {
      case 'he':
        return 'heeloo';
      case 'random':
        return this.randomFn();
      default:
        break;
    }
  }

  handleUserCommand(command: any) {
    if (command) {
    }
  }

  randomFn() {
    return Math.random();
  }
}
