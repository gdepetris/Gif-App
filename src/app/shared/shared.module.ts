import { CommonModule } from "@angular/common";
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
       CommonModule

    ]


})
export class sharedModule {}