import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.scss']
})
export class DestinoViajeComponent implements OnInit {
  @Input() nombre: string;

  constructor() {
    this.nombre = 'nombre por defecto'
  }

  ngOnInit(): void {
  }

}
