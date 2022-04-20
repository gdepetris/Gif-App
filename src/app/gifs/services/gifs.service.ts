import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor(private http: HttpClient) { 

    if (localStorage.getItem('historial')){
      this._historial = JSON.parse( localStorage.getItem('historial')!);

    }

    if (localStorage.getItem('busqueda')){
      this.resultado = JSON.parse(localStorage.getItem('busqueda')!);
    }

  }

  private apiKey: string = "0V0csrXTct9LXtVh9lXFWXEb1tigSW2K";
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

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

    localStorage.setItem('historial', JSON.stringify(this._historial));

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', valor)

    this.http.get(`${this.serviceUrl}/search`, {params})
        .subscribe( (resp: any) => { console.log(resp.data)
        this.resultado = resp.data;
        localStorage.setItem('busqueda', JSON.stringify(this.resultado));
        });
        
  }


}
