import { Component, OnInit } from '@angular/core';
import { SymbolService } from '../../services/symbol.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-symbol-lista',
  templateUrl: './symbol-lista.component.html',
  styleUrls: ['./symbol-lista.component.css']
})


export class SymbolListaComponent implements OnInit {

  constructor(private symbolService:SymbolService, private ngbModal:NgbModal) { }

  ngOnInit() {
  		//this.getSymbol();
      //this.getHistoria();
  }

  OpenModal(modal:any){
    const modalRef = this.ngbModal.open(modal);
    modalRef.result.then(result=>{
      console.log(result);
    }).catch((error)=>{
      console.log(error)
    })
  }

  addSymbol(newTitle:HTMLInputElement){
      console.log(newTitle.value);
  }

  getSymbol(){
  	this.symbolService.getSymbol('UNIT').subscribe(resp=>{
  		//console.log(resp.quoteResponse.result[0].symbol);
  	})
  }

  getHistoria(){
    this.symbolService.getHistorical('IBM').subscribe(resp => {
      console.log(resp.chart.result[0].timestamp);
      console.log(resp.chart.result[0].indicators.quote[0].low);
      console.log(resp.chart.result[0].indicators.quote[0].high);
    })
  }

}
