import { Component } from "@angular/core";
import { GifsService } from "src/app/gifs/services/gifs.service";

@Component({
    selector:'app-sidebar',
    templateUrl:'sidebar.component.html'

})
export class sidebarComponent {

    constructor(private GifsService: GifsService){}

    get historial(){
        return this.GifsService.historial;
    }

    buscar( algo: string ){
        this.GifsService.agregaHistorial(algo);
    }

}