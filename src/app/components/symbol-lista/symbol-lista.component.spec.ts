import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymbolListaComponent } from './symbol-lista.component';

describe('SymbolListaComponent', () => {
  let component: SymbolListaComponent;
  let fixture: ComponentFixture<SymbolListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymbolListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymbolListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
