import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';

import { ListaInvestimentosComponent } from './lista-investimentos.component';

describe('ListaInvestimentosComponent', () => {
  let component: ListaInvestimentosComponent;
  let fixture: ComponentFixture<ListaInvestimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaInvestimentosComponent ],
      imports:[HttpClientTestingModule , MatCardModule],

    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaInvestimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
