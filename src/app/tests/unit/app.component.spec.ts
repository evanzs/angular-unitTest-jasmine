import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../../app.component';


describe('appComponent',()=>{
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations:[AppComponent]
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

  // it('should render title',()=>{
  //   const compiled = fixture.nativeElement;

  //   expect(compiled.querySelector('#div').textContent).toContain('Hello World')
  // })

})