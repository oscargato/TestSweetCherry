import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { SymbolModelResponse } from '../models/SymbolModel';
import { SymbolModel } from '../models/SymbolModel';
import { HistoricalModel } from '../models/HistoricalModel';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class SymbolService {

  private API_URL: string = '/v7/finance';
  private httpHeaders: HttpHeaders;
  private symbol:SymbolModel[] = [];

  constructor(private httpClient:HttpClient) { 
    this.httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
        });
  }

  public getSymbol(symbol: string){
    const path = `${this.API_URL}/quote?symbols=${symbol}`;
    return this.httpClient.get<SymbolModelResponse>(path,{ headers: this.httpHeaders}).pipe(map(resp=>resp.quoteResponse.result[0]));
  }  

  public getHistorical(symbol: string){
    const path = `${this.API_URL}/chart/${symbol}?lang=en-US&region=US&interval=1d&range=16d&corsDomain=finance.yahoo.com`;
    return this.httpClient.get<HistoricalModel>(path,{ headers: this.httpHeaders}).pipe(map(resp=>resp.chart.result[0]));
  }

  public getSymbols(){
    if(localStorage.getItem('SYMB') === null){
      this.symbol = [];
    }
    else
    {  this.symbol = JSON.parse(localStorage.getItem('SYMB'));  }
    return this.symbol;
  }

  public addSymb(symb:SymbolModel){
    this.symbol.push(symb);
    let sym:SymbolModel[] = [];
    if(localStorage.getItem('SYMB') === null){
        sym.push(symb);
        localStorage.setItem('SYMB',JSON.stringify(sym));
    } 
    else
    {  sym = JSON.parse(localStorage.getItem('SYMB'));
       sym.push(symb);
       localStorage.setItem('SYMB',JSON.stringify(sym));
    }
  }
 
  public deleteSymb(symb:string){
    for(let i=0; i < this.symbol.length ;i++){
      if(symb == this.symbol[i].symbol){
          this.symbol.splice(i,1);
          localStorage.setItem('SYMB',JSON.stringify(this.symbol));
      }
    }
  }
}