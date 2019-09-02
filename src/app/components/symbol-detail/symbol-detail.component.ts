import { Component, OnInit } from '@angular/core';
import { SymbolService } from '../../services/symbol.service';
import { SymbolModel } from '../../models/SymbolModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-symbol-detail',
  templateUrl: './symbol-detail.component.html',
  styleUrls: ['./symbol-detail.component.css']
})
export class SymbolDetailComponent implements OnInit {

  private symbolModel:SymbolModel = new SymbolModel();
  private dateHistorical:string[] = [];

  constructor(private symbolService:SymbolService, private activatedRoute:ActivatedRoute,){}

  ngOnInit(){

  	this.activatedRoute.params.subscribe(params=>{
  	    this.symbolService.getHistorical(params['sym']).subscribe(resp=>{
          this.dateHistorical = resp.timestamp;

  	   	  console.log('Respuesta A',resp);
  	    });
    });

    /*
    this.activatedRoute.params.subscribe(params=>{
        this.symbolService.getSymbol(params['sym']).subscribe(resp=>{
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
          this.symbolModel.regularMarketTime = resp.regularMarketTime;
          this.symbolModel.symbol = resp.symbol;
          console.log('RESPUESTA de SymbolModel',this.symbolModel);
        });
    });
    */
  }
}