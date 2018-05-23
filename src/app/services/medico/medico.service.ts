import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { UsuarioService } from '../usuario/usuario.service';
import { Medico } from '../../models/medico.model';

@Injectable()
export class MedicoService {

  totalMedicos = 0;

  constructor(public http: HttpClient, public _usuarioService: UsuarioService) { }

  cargarMedicos() {
    const URL = URL_SERVICIOS + '/medico';

    return this.http.get(URL)
                    .map( (resp: any) => {
                      this.totalMedicos = resp.total;
                      return resp.medicos;
                    });
  }

  cargarMedico(id: string) {
    const URL = URL_SERVICIOS + '/medico/' + id;

    return this.http.get(URL)
                    .map( (resp: any) => resp.medico);
  }

  buscarMedicos(termino: string) {
    const URL = URL_SERVICIOS + '/busqueda/coleccion/medicos/' + termino;
    return this.http.get(URL).map((resp: any) => resp.medicos);
  }

  borrarMedico(id: string) {
    const URL = URL_SERVICIOS + '/medico/' + id + '?token=' + this._usuarioService.token;

    return this.http.delete(URL)
                    .map(resp => {
                      swal('Medico borrado', 'Medico borrado correctamente', 'success');
                      return resp;
                    });
  }


  guardarMedico(medico: Medico) {
    let url = URL_SERVICIOS + '/medico';

    if (medico._id) {

      url += '/' + medico._id;
      url += '?token=' + this._usuarioService.token;

      return this.http.put(url, medico)
              .map((resp: any) => {
                swal('Medico actualizado', medico.nombre, 'success');
                return resp.medico;
              });
    } else {

      url += '?token=' + this._usuarioService.token;
      return this.http.post(url, medico)
              .map((resp: any) => {
                swal('Medico creado', medico.nombre, 'success');
                return resp.medico;
              });
    }
  }

}
