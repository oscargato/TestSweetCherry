import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SymbolListaComponent } from './components/symbol-lista/symbol-lista.component';
import { SymbolDetailComponent } from './components/symbol-detail/symbol-detail.component';


const routes: Routes = [
    { path: 'symbol', component:SymbolListaComponent },
    { path: 'details/:sym', component:SymbolDetailComponent },
    { path: '**', redirectTo: 'symbol' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }