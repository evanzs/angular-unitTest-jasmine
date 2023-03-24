import { CalcComponent } from './../../calc/calc.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../../app.component';
import { ListaInvestimentosComponent } from 'src/app/lista-investimentos/lista-investimentos.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatCardModule } from '@angular/material/card';
import { NewComponentComponent } from 'src/app/shared/new-component/new-component.component';
import { SharedModule } from 'src/app/shared/shared.module';


describe('appComponent',()=>{
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations:[AppComponent,CalcComponent,ListaInvestimentosComponent, NewComponentComponent],
      imports:[HttpClientTestingModule, MatCardModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create',()=>{
    expect(component).toBeTruthy();
  })

  it('should has title "unit-test"',()=>{
    expect(component.title).toEqual('unit-test')
  })

})
