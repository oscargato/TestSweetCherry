import { Component, OnInit, TemplateRef } from '@angular/core';
import { SymbolService } from '../../services/symbol.service';
import { SymbolModel } from '../../models/SymbolModel';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import * as moment from 'moment';

@Component({
  selector: 'app-symbol-lista',
  templateUrl: './symbol-lista.component.html',
  styleUrls: ['./symbol-lista.component.css']
})
export class SymbolListaComponent implements OnInit {

  private bsModalRef:BsModalRef;
  private symbolModel:SymbolModel = new SymbolModel();

  constructor(private symbolService:SymbolService, 
              private ngbModal:NgbModal,
              private activatedRoute:ActivatedRoute,
              private router:Router,
              private bsModalService:BsModalService){}

  ngOnInit() {
  }

  public openModal(template:TemplateRef<any>){
     this.bsModalRef = this.bsModalService.show(template);
  }
  
  public addSymbol(symb:string){
    console.log(symb);
    this.symbolService.getSymbol(symb).subscribe(resp=>{
      this.symbolModel.ask = resp.ask;
      this.symbolModel.askSize = resp.askSize;
      this.symbolModel.bid = resp.bid;
      this.symbolModel.bidSize = resp.bidSize;
      this.symbolModel.currency = resp.currency;
      this.symbolModel.fullExchangeName = resp.fullExchangeName;
      this.symbolModel.longName = resp.longName;
      this.symbolModel.region = resp.region;
      this.symbolModel.regularMarketChangePercent = resp.regularMarketChangePercent;
      this.symbolModel.regularMarketPrice = resp.regularMarketPrice;
      this.symbolModel.regularMarketTime = moment.unix(resp.regularMarketTime).format('MM/DD/YYYY');
      this.symbolModel.symbol = resp.symbol;
      console.log(resp);
    });
    this.bsModalRef.hide();
  }
}