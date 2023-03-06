import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../../app.component';


describe('interface appComponent',()=>{
  let fixture: ComponentFixture<AppComponent>;
  let component:any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations:[AppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should render title',()=>{
    expect(component.querySelector('#div').textContent).toContain('Hello World')
  })

})
