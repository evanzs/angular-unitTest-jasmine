import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalcComponent } from '../../calc.component';



describe('CalcComponent', () => {
  let component: CalcComponent;
  let fixture: ComponentFixture<CalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('getCarteira() should have 10', () => {
    expect(component).toBeTruthy();
  });


  it('getCarteira() should return 10', () => {
    expect(component.getCarteira).toBe(10);
  });


  it('getPoupanca() should return 10', () => {
    expect(component.getPoupanca).toBe(10);
  });


  it('getMontante() should return 20', () => {
    expect(component.getMontante).toBe(20);
  });

  it('setSacar() should transfer poupanca to carteira', () => {
    let expectValue = component.getCarteira + 10;
    component.setSacar('10');
    expect(component.getCarteira).toEqual(expectValue)
  });

  it('setSacar() should transfer poupanca to carteira', () => {
    let expectValue = component.getPoupanca - 10;
    component.setSacar('10');
    expect(component.getPoupanca).toEqual(expectValue)
  });

  it('setSacar() should not transfer to carteira with string value', () => {
    let expectValue = component.getCarteira;
     component.setSacar('stringValue');
     expect(component.getCarteira).toEqual(expectValue);
  });

  it('setSacar() should not change getPoupanca when input string value', () => {
    let expectValue = component.getPoupanca;

     component.setSacar('stringValue');
     expect(component.getPoupanca).toEqual(expectValue);
  });

  it('setSacar() should return undefined when intput string value', () => {
     expect(component.setSacar('stringValue')).not.toBeTruthy();
  })

  //deposit

  it('setDepositar() should transfer carteira to poupanca', () => {
    let expectValue = component.getPoupanca + 10;
    component.setDepositar('10');
    expect(component.getPoupanca).toEqual(expectValue)
  });

  it('setDepositar() should change carteira value', () => {
    let expectValue = component.getCarteira - 10;
    component.setDepositar('10');
    expect(component.getCarteira).toEqual(expectValue)
  });

  it('setDepositar() should not transfer to poupanca when input string value', () => {
    let expectValue = component.getCarteira;
     component.setDepositar('stringValue');
     expect(component.getCarteira).toEqual(expectValue);
  });

  it('setDepositar() should not change getPoupanca when input string value', () => {
    let expectValue = component.getPoupanca;

     component.setDepositar('stringValue');
     expect(component.getPoupanca).toEqual(expectValue);
  });

  it('setDepositar() should return undefined when input string value', () => {
     expect(component.setDepositar('stringValue')).not.toBeTruthy();
  })

});
