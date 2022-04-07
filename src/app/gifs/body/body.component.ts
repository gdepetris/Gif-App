import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styles: [
  ]
})
export class BodyComponent {

  constructor(private GifsService: GifsService) { }

  get resultados() {
    return this.GifsService.resultado;
  }

}
