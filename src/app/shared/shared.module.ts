import { NgModule } from "@angular/core";
import { AppComponent } from "../app.component";
import { sidebarComponent } from "./sidebar/sidebar.component";

@NgModule({
    declarations: [
       sidebarComponent
    ],
    exports: [
        sidebarComponent

    ],
    imports: [
       

    ]


})
export class sharedModule {}