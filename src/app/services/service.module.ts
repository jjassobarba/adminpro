import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService, SettingsService, SharedService, UsuarioService, LoginGuardGuard, SubirArchivoService } from './service.index';
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
    SubirArchivoService,
    SettingsService],
  declarations: []
})
export class ServiceModule { }
