import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlanesService {

  constructor(private http: HttpClient) { }

  traerPlanes() {
    return this.http.get(`${environment.API_URL}/planes`);
  }

  eliminarPlan(id) {
    return this.http.delete(`${environment.API_URL}/planes/${id}`);
  }
  
  editarPlan(id, plan) {
    return this.http.put(`${environment.API_URL}/planes/${id}`, plan);
  }
  
  crearPlan(plan) {
    return this.http.post(`${environment.API_URL}/planes`, plan);
  }
}