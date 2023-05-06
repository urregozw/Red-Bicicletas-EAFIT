import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BicicletaService } from '../services/bicicleta-service.service';
import { Bicicleta } from '../modelo/bicicleta';
import { Router } from '@angular/router';

@Component({
  selector: 'lista-bicicletas',
  templateUrl: './listar-bicicletas.component.html',
  styleUrls: ['./listar-bicicletas.component.css']
})
export class ListarBicicletasComponent implements OnInit{

  public bicicletas!: Bicicleta[];
  constructor(private servicioBicicleta: BicicletaService, private router: Router) { }

  ngOnInit(): void {
      this.servicioBicicleta.getBicicletas().subscribe(bicicletas => this.bicicletas = bicicletas);
  }

  onDelete(id: string) {
    this.servicioBicicleta.deleteBici(id).subscribe( 
      (response) => {
        console.log("Se elimino la bicicleta");
        // console.log(response);
        this.ngOnInit();
        // this.router.navigate(['/bicicletas']);
      },
      (error) => {
        console.log("Se devolvio error eliminando");
        console.error(error);
      });
  }
}
