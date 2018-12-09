import { CommunicationService } from './utils/communication.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { TableComponent } from './table/table.component';
import { AppRoutingModule } from './app-routing.module';
import { TableService } from './table/table.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TableComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
  ],
  providers: [TableService, TableComponent, CommunicationService],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule { }
