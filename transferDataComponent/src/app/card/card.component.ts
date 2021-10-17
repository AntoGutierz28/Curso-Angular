import { Component, OnInit, Input } from '@angular/core';
import { ServiceFavService } from '../service-fav.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() dataEntrante: any;

  constructor(private servicioFavorito: ServiceFavService) {}

  ngOnInit(): void {}
  agregarFavorito() {
    this.servicioFavorito.disparador.emit({
      data: this.dataEntrante,
    });
  }
}
