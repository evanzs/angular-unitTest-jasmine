import { NewComponentComponent } from './../../shared/new-component/new-component.component';
import { CalcComponent } from './../../calc/calc.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../../app.component';
import { ListaInvestimentosComponent } from 'src/app/lista-investimentos/lista-investimentos.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatCardModule } from '@angular/material/card';


describe('interface appComponent',()=>{
  let fixture: ComponentFixture<AppComponent>;
  let component:any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations:[AppComponent,CalcComponent,ListaInvestimentosComponent, NewComponentComponent],
      imports:[HttpClientTestingModule, MatCardModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should render title',()=>{
    expect(component.querySelector('#title').textContent).toContain('Hello World')
  })

})
