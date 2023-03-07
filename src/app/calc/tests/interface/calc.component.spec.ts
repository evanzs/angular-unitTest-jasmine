import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalcComponent } from '../../calc.component';



describe('Interface CalcComponent', () => {
  let component: CalcComponent;
  let nativeComponent: any;
  let fixture: ComponentFixture<CalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcComponent);
    component = fixture.componentInstance;
    nativeComponent = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should contain Montante value', () => {
    expect(nativeComponent.querySelector('#montante').textContent).toContain(component.getMontante);
  });

});
