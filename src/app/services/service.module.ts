import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService,
        SettingsService,
        SharedService,
        UsuarioService,
        LoginGuardGuard,
        SubirArchivoService,
        HospitalService,
        MedicoService,
        AdminGuard} from './service.index';
import { HttpClientModule } from '@angular/common/http';
import { ModalUploadService } from '../components/modal-upload/modal-upload.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SharedService,
    SidebarService,
    UsuarioService,
    MedicoService,
    HospitalService,
    LoginGuardGuard,
    AdminGuard,
    SubirArchivoService,
    ModalUploadService,
    SettingsService],
  declarations: []
})
export class ServiceModule { }
