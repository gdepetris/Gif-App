import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor(private http: HttpClient) { }

  private apiKey: string = "0V0csrXTct9LXtVh9lXFWXEb1tigSW2K";

  resultado: any[] = [];

  private _historial: string[] = [];
  
  get historial() {
    return [...this._historial];
  }

  agregaHistorial(valor: string){
     valor = valor.trim().toLocaleLowerCase()
    
    if(valor.trim().length==0){
      return;
    }
    if(this._historial.includes(valor)){
      return;
    }
    this._historial.unshift(valor);
    this._historial= this._historial.splice(0,10);

    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=0V0csrXTct9LXtVh9lXFWXEb1tigSW2K&q=${valor}&limit =10`)
        .subscribe( (resp: any) => { console.log(resp.data)
        this.resultado = resp.data;
        });
        
  }


}
