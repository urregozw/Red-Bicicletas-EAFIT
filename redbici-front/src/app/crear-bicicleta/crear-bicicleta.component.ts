import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-bicicleta',
  templateUrl: './crear-bicicleta.component.html',
  styleUrls: ['./crear-bicicleta.component.css']
})
export class CrearBicicletaComponent {
  id!: string;
  color!: string;
  modelo!: string;
  lat!: string;
  lng!: string;

  // formData: any = {};

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const formData = new FormData();
    formData.append('id', this.id);
    formData.append('color', this.color);
    formData.append('modelo', this.modelo);
    formData.append('lat', this.lat);
    formData.append('lng', this.lng);
    console.log(formData);
    // alert();
    // Este si funciona siiuuuu
    const data = {
      id: this.id,
      color: this.color,
      modelo: this.modelo,
      lat: this.lat,
      lng: this.lng
    }

    this.http.post("http://localhost:3000/api/bicicletas", data, {withCredentials: true}).subscribe(
      (response) => {
        this.router.navigate(['/bicicletas']);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
