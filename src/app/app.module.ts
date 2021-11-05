import { AuthHttpInterceptor } from './interceptors/auth-http.interceptor';
import { CommonModule } from '@angular/common';
import { ServicesModule } from './services/services.module';
import { InterceptorsModule } from './interceptors/interceptors.module';
import { GuardsModule } from './guards/guards.module';
import { ComponentsModule } from './components/components.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    GuardsModule,
    InterceptorsModule,
    FormsModule,
    ComponentsModule,
    HttpClientModule,
    
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
