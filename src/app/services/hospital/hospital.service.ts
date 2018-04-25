import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/config';
import { HttpClient } from '@angular/common/http';
import { Hospital } from '../../models/hospital.model';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class HospitalService {

  totalHospitales = 0;

  constructor(public http: HttpClient, public _usuarioService: UsuarioService) { }

  cargarHospitales() {
    const URL = URL_SERVICIOS + '/hospital';
    return this.http.get(URL)
      .map((resp: any) => {
        this.totalHospitales = resp.total;
        return resp.hospitales;
      });
  }

  obtenerHospital(id: string) {
    const URL = URL_SERVICIOS + '/hospital/' + id;
    return this.http.get(URL)
      .map((resp: any) => resp.hospital);
  }

  borrarHospital(id: string) {
    const URL = URL_SERVICIOS + '/hospital/' + id + '?token=' + this._usuarioService.token;
    return this.http.delete(URL).map(resp => {
      swal('Hospital borrado', 'El hospital ha sido borrado correctamente', 'success');
    });
  }

  crearHospital(nombre: string) {
    const URL = URL_SERVICIOS + '/hospital?token=' + this._usuarioService.token;
    return this.http.post(URL, { nombre })
      .map((resp: any) => resp.hospital);
  }

  actualizarHospital(hospital: Hospital) {
    const URL = URL_SERVICIOS + '/hospital/' + hospital._id + '?token=' + this._usuarioService.token;
    return this.http.put(URL, hospital)
      .map((resp: any) => {
        swal('Hospital actualizado', hospital.nombre, 'success');
        return resp.hospital;
      });
  }

  buscarHospital(termino: string) {
    const URL = URL_SERVICIOS + '/busqueda/coleccion/hospitales/' + termino;
    return this.http.get(URL).map((resp: any) => resp.hospitales);
  }

}
