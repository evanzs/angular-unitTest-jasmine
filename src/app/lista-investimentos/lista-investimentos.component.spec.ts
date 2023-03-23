import { INVESTIMENTOS } from './../mockInvestimentos';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';

import { ListaInvestimentosComponent } from './lista-investimentos.component';
import { ListaInvestimentosService } from './service/lista-investimentos.service';
import { of } from 'rxjs';

describe('ListaInvestimentosComponent', () => {
  let component: ListaInvestimentosComponent;
  let fixture: ComponentFixture<ListaInvestimentosComponent>;
  let service: ListaInvestimentosService;
  let nativeComponent : any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaInvestimentosComponent ],
      imports:[HttpClientTestingModule , MatCardModule],

    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaInvestimentosComponent);
    service = TestBed.inject(ListaInvestimentosService);
    component = fixture.componentInstance;
    nativeComponent = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should  call servicelist', () =>{
    spyOn(service,'list').and.returnValue(of(INVESTIMENTOS))
    component.ngOnInit();
    expect(service.list).toHaveBeenCalled();
  })

  it('Should  call setList', () =>{
    spyOn(service,'list').and.returnValue(of(INVESTIMENTOS))
    spyOn(component,'setListaInvestimentos').and.returnValue((INVESTIMENTOS))
    component.ngOnInit();
    expect(component.setListaInvestimentos).toHaveBeenCalled();
  })

  it('Should setList implement listaInvestimento', () =>{
    component.setListaInvestimentos(INVESTIMENTOS);
    expect(component.listaInvestimento).toEqual(INVESTIMENTOS)
  })

  it('Should list in HTML component', () =>{
    spyOn(service,'list').and.returnValue(of(INVESTIMENTOS))

    component.ngOnInit();
    fixture.detectChanges();
    let investimentos = nativeComponent.querySelectorAll('#list-items')
    expect(investimentos.length).toEqual(4)
  })
});
