import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService, SettingsService, SharedService, UsuarioService, LoginGuardGuard } from './service.index';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SharedService,
    SidebarService,
    UsuarioService,
    LoginGuardGuard,
    SettingsService],
  declarations: []
})
export class ServiceModule { }
