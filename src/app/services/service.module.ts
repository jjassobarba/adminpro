import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService, SettingsService, SharedService } from './service.index';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [SharedService,
    SidebarService,
    SettingsService],
  declarations: []
})
export class ServiceModule { }
