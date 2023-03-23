import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { CalcComponent } from '../../calc.component';



describe('interface CalcComponent', () => {
  let component: CalcComponent;
  let nativeComponent: any;
  let fixture: ComponentFixture<CalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcComponent ],
      imports:[MatCardModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcComponent);
    component = fixture.componentInstance;
    nativeComponent = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should contain Montante value', () => {
    expect(nativeComponent.querySelector('#h_montante').textContent).toContain("Montante: RS "+component.getMontante);
  });

  it('should contain Carteira value', () => {
    expect(nativeComponent.querySelector('#h_carteira').textContent).toContain("Carteira: RS "+component.getCarteira);
  });

  it('should contain Poupanca value', () => {
    expect(nativeComponent.querySelector('#h_poupanca').textContent).toContain("Poupança: RS "+component.getPoupanca);
  });

  it('should contain Sacar on btnSacar', () => {
    expect(nativeComponent.querySelector('#btn_sacar').textContent).toContain("Sacar");
  });

  it('should contain Depositar on btnDepositar', () => {
    expect(nativeComponent.querySelector('#btn_depositar').textContent).toContain("Depositar");
  })

  it('should transfer poupanca to carteira', () => {
    let expectValue = component.getCarteira + 10;
    nativeComponent.querySelector('#input_sacar').value = 10;
    nativeComponent.querySelector('#btn_sacar').click();

    fixture.detectChanges();
    expect(nativeComponent.querySelector('#h_carteira').textContent).toContain("Carteira: RS " + expectValue);
  })

  it('should att poupanca value', () => {
    let expectValue = nativeComponent.querySelector('#h_poupanca').textContent
    nativeComponent.querySelector('#input_sacar').value = 10;
    nativeComponent.querySelector('#btn_sacar').click();

    fixture.detectChanges();
    expect(nativeComponent.querySelector('#h_poupanca').textContent).not.toContain(expectValue);
  })


  it('should transfer carteira to poupanca', () => {
    let expectValue = component.getPoupanca + 10;
    nativeComponent.querySelector('#input_sacar').value = 10;
    nativeComponent.querySelector('#btn_depositar').click();

    fixture.detectChanges();
    expect(nativeComponent.querySelector('#h_poupanca').textContent).toContain("Poupança: RS " + expectValue);
  })

});
