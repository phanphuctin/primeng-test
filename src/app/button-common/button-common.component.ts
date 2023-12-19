import { Component } from '@angular/core';

@Component({
  selector: 'app-button-common',
  templateUrl: './button-common.component.html',
  styleUrls: ['./button-common.component.scss'],
})
export class ButtonCommonComponent {

  constructor() {
    console.log('constructor child');
    
  }

  ngOnInit() {
    console.log('ngOnInit child');

  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit child');

  }
  show() {
    alert('ccc');
  }
}
