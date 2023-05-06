import { Component, OnInit } from '@angular/core';
import { Bicicleta } from '../modelo/bicicleta';
import { BicicletaService } from '../services/bicicleta-service.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-mostrar-bicicleta',
  templateUrl: './mostrar-bicicleta.component.html',
  styleUrls: ['./mostrar-bicicleta.component.css']
})
export class MostrarBicicletaComponent implements OnInit{

  public bicicleta!: Bicicleta;

  constructor (private bicicletaService: BicicletaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.bicicletaService.getBicicleta(params["id"]).subscribe(bici => this.bicicleta = bici);
      });
      
  }
}
