import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Bicicleta } from '../modelo/bicicleta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BicicletaService {

  private url = "http://localhost:3000/api/bicicletas";

  constructor(private http: HttpClient) { }

  public getBicicletas() {
    return this.http.get<Bicicleta[]>(this.url, {withCredentials: true});
  }

  public getBicicleta(id: string) {
    return this.http.get<Bicicleta>(this.url  + '/' + id + '/show', {withCredentials: true});
  }

  public deleteBici(id: string) {
    return this.http.delete(this.url  + '/' + id + '/delete', {withCredentials: true});
  }
}

