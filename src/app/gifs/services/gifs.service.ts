import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor() { }

  private _historial: String[] = [];
  
  get historial() {
    return [...this._historial];
  }

  agregaHistorial(valor: String){
     valor = valor.trim().toLocaleLowerCase()
    
    if(valor.trim().length==0){
      return;
    }
    if(this._historial.includes(valor)){
      return;
    }
    this._historial.unshift(valor);
    this._historial= this._historial.splice(0,10);
  }


}
