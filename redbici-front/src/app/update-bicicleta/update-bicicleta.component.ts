import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bicicleta } from '../modelo/bicicleta';
import { BicicletaService } from '../services/bicicleta-service.service';

@Component({
  selector: 'app-update-bicicleta',
  templateUrl: './update-bicicleta.component.html',
  styleUrls: ['./update-bicicleta.component.css']
})
export class UpdateBicicletaComponent implements OnInit {

  public bicicleta!: Bicicleta;
  id!: string;
  color!: string;
  modelo!: string;
  lat!: number;
  lng!: number;

  constructor (private bicicletaService: BicicletaService, private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.bicicletaService.getBicicleta(params["id"]).subscribe(bici => {
        this.bicicleta = bici;
        this.id = bici.id;
        this.color = bici.color;
        this.modelo = bici.modelo;
        this.lat = bici.lat;
        this.lng = bici.lng;
      });
    });
  }
  onSubmit() {
    const data = {
      id: this.id,
      color: this.color,
      modelo: this.modelo,
      lat: this.lat,
      lng: this.lng
    }

    this.http.post(`http://localhost:3000/api/bicicletas/${this.id}/update`, data, {withCredentials: true}).subscribe(
      (response) => {
        console.log('Se pudo actualizar la pagina');
        this.router.navigate(['/bicicletas']);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
