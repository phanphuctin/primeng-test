import { Component } from '@angular/core';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  color = '';
  constructor(private appConfig: ConfigService) {}

  ngOnInit() {
    let config = JSON.parse(localStorage.getItem('config') || '{}');
    console.log('app', config.color);
    this.color = this.appConfig.color;
  }
}
