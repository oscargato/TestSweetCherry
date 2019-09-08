import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SymbolListaComponent } from './components/symbol-lista/symbol-lista.component';
import { SymbolService } from './services/symbol.service';
import { NgbModal, ModalDismissReasons, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SymbolDetailComponent } from './components/symbol-detail/symbol-detail.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    SymbolListaComponent,
    SymbolDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	  BrowserAnimationsModule,
    HttpClientModule,
	  ToastrModule.forRoot({
        timeOut:3000,
        positionClass:'toast-top-right',
        preventDuplicates:true,
    }),
    NgbModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [
    SymbolService,
    ],
  bootstrap: [AppComponent]
})

export class AppModule { }