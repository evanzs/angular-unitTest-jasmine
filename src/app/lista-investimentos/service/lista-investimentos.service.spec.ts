import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ListaInvestimentosService } from './lista-investimentos.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { Investimento } from 'src/app/investimento';
import { INVESTIMENTOS } from 'src/app/mockInvestimentos';
describe('ListaInvestimentosService', () => {
  let service: ListaInvestimentosService;
   let httpTestingController:HttpTestingController;
   let httpClient:HttpClient;
   const URL = "https://raw.githubusercontent.com/troquatte/fake-server/main/investiments-all.json";
   const mockList:Array<Investimento> = INVESTIMENTOS;

   beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ListaInvestimentosService);
  });

  afterEach(()=>{
    httpTestingController.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should list all investment',(done)=>{

    service.list().subscribe((res:Array<Investimento>) => {
      expect(res[0].name).toEqual('Banco 1')
      expect(res[3].name).toEqual('Banco 4')
      done();
    })

    const  req = httpTestingController.expectOne(URL);
    req.flush(mockList);
  })

  it('should return GET Method ',(done)=>{
    service.list().subscribe((res:Array<Investimento>) => {
      done();
    })
    const  req = httpTestingController.expectOne(URL);
    req.flush(mockList);
    expect(req.request.method).toEqual('GET');
  })


});
