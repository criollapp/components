import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { DebugElement } from "@angular/core";
import { CAlertComponent } from "../../components/alert/ca-alert.component";
import { CAlertClass } from "../../class/ca-alert.class";
import { By } from "@angular/platform-browser";
import { TestCAlertContainerComponent } from "../utils/test-ca-alert-component-container.util";

describe('CAlertComponent', () => {
  let de: DebugElement;
  let span: DebugElement;
  let component: CAlertComponent;
  let fixture: ComponentFixture<CAlertComponent>;

  let componentContainer: TestCAlertContainerComponent;
  let fixtureContainer: ComponentFixture<TestCAlertContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [CAlertComponent, TestCAlertContainerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CAlertComponent);
    fixtureContainer = TestBed.createComponent(TestCAlertContainerComponent);
    component = fixture.componentInstance;
    componentContainer = fixtureContainer.componentInstance;
    de = fixture.debugElement.query(By.css('div'));
    span = fixture.debugElement.query(By.css('div span'));
    fixture.detectChanges();
    fixtureContainer.detectChanges();
  });

  it('has alert instance by default',()=>{
    expect(component.alert instanceof CAlertClass).toBeTruthy();
  });

  it('alertClass has default class',()=>{
    expect(component.alertClass.indexOf("ca-alert") > -1 ).toBeTruthy();
  });

  it('alertClass has alert class when alert is bootstrap',()=>{
    component.setBootstrap();

    expect(component.alertClass.indexOf("alert") > -1 ).toBeTruthy();
  });

  it('alertClass has alert-info when alert is info type and is bootstrap',()=>{
    component.setBootstrap();
    component.alert.setInfoType();

    expect(component.alertClass.indexOf("alert-info") > -1 ).toBeTruthy();
  });

  it('alertClass has alert-success when alert is success type and is bootstrap',()=>{
    component.setBootstrap();
    component.alert.setSuccessType();

    expect(component.alertClass.indexOf("alert-success") > -1 ).toBeTruthy();
  });

  it('alertClass has alert-warning when alert is warning type and is bootstrap',()=>{
    component.setBootstrap();
    component.alert.setWarningType();

    expect(component.alertClass.indexOf("alert-warning") > -1 ).toBeTruthy();
  });

  it('alertClass has alert-danger when alert is danger type and is bootstrap',()=>{
    component.setBootstrap();
    component.alert.setDangerType();

    expect(component.alertClass.indexOf("alert-danger") > -1 ).toBeTruthy();
  });

  it('alertClass not has alert-dismissable when it not can be close and is bootstrap',()=>{
    component.setBootstrap();

    expect(component.alertClass.indexOf("alert-dismissable") == -1 ).toBeTruthy();
  });

  it('alertClass has alert-dismissable when it can be close and is bootstrap',()=>{
    component.setBootstrap();
    component.alert.allowClose = true;

    expect(component.alertClass.indexOf("alert-dismissable") > -1 ).toBeTruthy();
  });

  it('div on component has class from  object class',()=>{
    component.setBootstrap();

    fixture.detectChanges();

    expect( de.nativeElement.classList.value == 'ca-alert alert alert-info' ).toBeTruthy();
  });

  it('div on component has message',()=>{
    component.alert.message = "Hello World";

    fixture.detectChanges();

    expect( span.nativeElement.innerHTML.trim() == component.alert.message ).toBeTruthy();
  });

  it('a button is added when allowclose is true with correct attrs and content',()=>{
    component.alert.allowClose = true;

    fixture.detectChanges();

    let close = fixture.debugElement.query(By.css('div a'));
    expect( close.attributes['aria-label'] == 'close' ).toBeTruthy();
    expect( close.attributes['href'] == '#' ).toBeTruthy();
    expect( close.attributes['class'] == 'close' ).toBeTruthy();
    expect( close.attributes['data-dismiss'] == 'alert' ).toBeTruthy();
    expect( close.attributes['data-dismiss'] == 'alert' ).toBeTruthy();
    expect( close.nativeElement.innerHTML.trim() == '×' ).toBeTruthy();
  });

  it('a button is not added when not allowclose',()=>{
    component.alert.allowClose = false;

    fixture.detectChanges();

    let close = fixture.debugElement.query(By.css('div a'));
    expect( close == null ).toBeTruthy();
  });

  it('closeAlert is called when we click on close button',()=>{
    spyOn(component, 'closeAlert');
    component.alert.allowClose = true;
    fixture.detectChanges();
    let button = fixture.debugElement.query(By.css('div a'));

    button.nativeElement.click();

    fixture.whenStable().then(() => {
      expect(component.closeAlert).toHaveBeenCalled();
    });
  });

  it('close event is emmited when closeAlert is called',()=>{
    component.close.subscribe((alert:CAlertClass)=>{
      expect(alert instanceof CAlertClass).toBeTruthy();
    });

    component.closeAlert();
  });

  it('when close button is clicked event output must be emmited',()=>{
    spyOn(componentContainer, 'closed');
    componentContainer.alertComponent.alert.allowClose = true;

    componentContainer.alertComponent.closeAlert();

    fixtureContainer.whenStable().then(() => {
      expect(componentContainer.closed).toHaveBeenCalled();
    });
  });

  it('when close button is clicked event output must be emmited',()=>{
    spyOn(componentContainer, 'closed');
    componentContainer.alertComponent.alert.allowClose = true;

    componentContainer.alertComponent.closeAlert();

    fixtureContainer.whenStable().then(() => {
      expect(componentContainer.closed).toHaveBeenCalled();
    });
  });

  it('when change parent alert, alert component instance  must be change too',()=>{
    componentContainer.alert.message = "test @Input value";

    expect(componentContainer.alertComponent.alert.message == componentContainer.alert.message ).toBeTruthy();
  });

});
