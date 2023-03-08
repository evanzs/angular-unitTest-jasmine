import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ListaInvestimentosService } from './lista-investimentos.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
describe('ListaInvestimentosService', () => {
  let service: ListaInvestimentosService;
   let httpTestingController:HttpTestingController;
   let httpClient:HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController)
    service = TestBed.inject(ListaInvestimentosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
