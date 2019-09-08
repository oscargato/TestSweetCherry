import { Component, OnInit } from '@angular/core';
import { SymbolService } from '../../services/symbol.service';
import { SymbolModel } from '../../models/SymbolModel';
import { HighHistorical } from '../../models/HistoricalModel';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-symbol-detail',
  templateUrl: './symbol-detail.component.html',
  styleUrls: ['./symbol-detail.component.css']
})
export class SymbolDetailComponent implements OnInit {

  private symbolModel:SymbolModel = new SymbolModel();
  private dateHistorical:HighHistorical[] = [];

  constructor(private symbolService:SymbolService, 
              private activatedRoute:ActivatedRoute, 
              private router:Router){}

  ngOnInit(){
  	this.activatedRoute.params.subscribe(params=>{
  	    this.symbolService.getHistorical(params['sym']).subscribe(resp=>{
          let dat = resp.timestamp;
          let low = resp.indicators.quote[0].low;
          let high = resp.indicators.quote[0].high;
          for (let i in dat)
          {  let obj = { date: moment.unix(dat[i]).format('MM/DD/YYYY'), low:low[i], high:high[i] }
             this.dateHistorical[i] = obj;
          }
  	    });
    });
    
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
          this.symbolModel.regularMarketTime = moment.unix(resp.regularMarketTime).format('MM/DD/YYYY');
          this.symbolModel.symbol = resp.symbol;
        });
    });
  }

  public back(){
    this.router.navigate(['/symbol']);
  }
}