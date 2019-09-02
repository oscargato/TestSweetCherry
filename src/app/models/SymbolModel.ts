export class SymbolModelResponse {
  quoteResponse: any;
  message: any;
  status: boolean|number;
}

export class SymbolModel {
	ask:number;
	askSize:number;
	bid:number;
	bidSize:number;
	currency:string;
	fullExchangeName:string;
	longName:string;
	region:string;
	regularMarketChangePercent:number;
	regularMarketPrice:number;
	regularMarketTime:number;
	symbol:string;
}