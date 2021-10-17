import { Component, OnInit } from '@angular/core';
import { ServiceFavService } from '../service-fav.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  constructor(private service: ServiceFavService) {}
  public listNombre: Array<any> = [];
  ngOnInit(): void {
    this.service.disparador.subscribe((data) => {
      this.listNombre.push(data);
      console.log(data);
    });
  }
}
