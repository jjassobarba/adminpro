import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/service.index';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];
  desde = 0;

  totalRegistros = 0;


  constructor(public _usuarioService: UsuarioService) { }

  ngOnInit() {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this._usuarioService.cargarUsuarios(this.desde)
                        .subscribe((resp: any) => {
                          this.totalRegistros = resp.total;
                          this.usuarios = resp.usuarios;
                        });
  }

  cambiarDesde(valor: number) {
    // tslint:disable-next-line:prefer-const
    let desde = this.desde + valor;

    if (desde >= this.totalRegistros || desde < 0) {
      return;
    }

    this.desde = desde;
    this.cargarUsuarios();

  }

}
