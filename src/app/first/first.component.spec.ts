import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FirstComponent} from './first.component';
import {RouterTestingModule} from '@angular/router/testing';
import {By} from '@angular/platform-browser';


describe('FirstComponent', () => {
  let component: FirstComponent;
  let fixture: ComponentFixture<FirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [FirstComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should match', () => {

  });

 /**    describe('learning test cases', () => {
       it('should run and show me a text box', function() {
      const button1 = fixture.debugElement.nativeElement.querySelector('#azure');
      const button2 = fixture.debugElement.nativeElement.querySelector('#premise');

      button1.click();
      button2.click();
      fixture.whenStable().then(() => {
        console.log(button2.outerHTML.toString())
        expect(button1.getAttribute('value')).toBe('Azure');
        expect(button1.checked).toBeFalsy(); // passes
        expect(button2.checked).toBeTruthy(); // passes
      });

      // inputElement.nativeElement.dispatchEvent(new Event('change'));


    });
  });
  */


});




