import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './not-found/not-found.component';
// import { LoginModule } from './login/login.module';
// import { TerminalGeneralModule } from './terminal/terminal.module';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ConfigService } from './services/config.service';
import { AppConfiguration } from './services/app-config';
import { ButtonCommonComponent } from './button-common/button-common.component';
import { AutoCompleteModule } from 'primeng/autocomplete';

export function initializerFn(jsonAppConfigService: ConfigService) {
  return () => {
    return jsonAppConfigService.load();
  };
}
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    TableComponent,
    ButtonCommonComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    HttpClientModule,
    AutoCompleteModule,
    // LoginModule,
    // TerminalGeneralModule,
  ],
  providers: [
    {
      provide: AppConfiguration,
      deps: [HttpClient],
      useExisting: ConfigService,
    },
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [ConfigService],
      useFactory: initializerFn,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
