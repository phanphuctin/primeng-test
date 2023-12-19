import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TerminalComponent } from './terminal/terminal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DialogService],
})
export class AppComponent {
  title = 'primeng_test';
  ref: DynamicDialogRef | undefined;
  constructor(private ds: DialogService) {
    console.log('constructor apppp');
  }

  ngOnInit() {
    console.log('ngOnInit apppp');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit apppp');
  }
  show() {
    this.ref = this.ds.open(TerminalComponent, { header: 'Hello Terminal' });
  }
}
