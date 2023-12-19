import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfiguration } from './app-config';

@Injectable({
  providedIn: 'root',
})
export class ConfigService extends AppConfiguration {
  color: any;
  filter: any;
  constructor(private http: HttpClient) {
    super();
  }
  load() {
    this.http.get<any>('config.json').subscribe(
      (data: any) => {
        console.log(data);
        this.color = data?.color;
        this.filter = data?.filter;
        localStorage.setItem('config', JSON.stringify(data));
      }
      // (e) => {
      //   console.log('eeerrr');
      // }
    );
  }
}
