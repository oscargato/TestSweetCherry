import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { SymbolModelResponse } from '../models/SymbolModel';
import { HistoricalModel } from '../models/HistoricalModel';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class SymbolService {

  protected API_URL: string = '/v7/finance';
  protected httpHeaders: HttpHeaders;

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
}