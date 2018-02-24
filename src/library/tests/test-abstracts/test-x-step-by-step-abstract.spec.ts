import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { XTestStepByStepComponent } from "../utils/test-ca-step-by-step-component.util";
import { TestXComponentsUtil } from "../utils/test-ca-components.util";
import { CAStepByStepAbstract } from "../../abstracts/ca-step-by-step.abstract";
import { TestStep } from "../utils/test-ca-step.util";
import { CAComponentsModule } from "../../modules/ca-components.module";

describe('CAStepByStepAbstract', () => {
  let component: XTestStepByStepComponent;
  let fixture: ComponentFixture<XTestStepByStepComponent>;

  beforeEach(async(() => {
    TestXComponentsUtil.resetStaticValues();
    TestBed.configureTestingModule({
      imports: [CAComponentsModule],
      declarations: [XTestStepByStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XTestStepByStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('total count of steps are 8 when is build', () => {
    expect(component.steps.length == 8).toBeTruthy();
  });

  it('current step number is 2 when is build', () => {
    expect(component.currentStepNumber == 2).toBeTruthy();
  });

  it('status is disabled when  is build', () => {
    expect(component.status == CAStepByStepAbstract.STATUS_DISABLED).toBeTruthy();
  });

  it('correct step is set when current number step is changed', () => {
    component.currentStepNumber = 4;

    expect(component.currentStep.id == component.getStepByNumber(4).id).toBeTruthy();
  });

  it('current step number is an no exists index number', () => {
    component.currentStepNumber = 0;

    expect(component.currentStepNumber == 2).toBeTruthy();

    component.currentStepNumber = 9;

    expect(component.currentStepNumber == 2).toBeTruthy();
  });

  it('nextStep  must be go to the next step', () => {
    component.currentStep.completed = true;
    component.nextStep();

    expect(component.currentStep.id == component.getStepByNumber(3).id).toBeTruthy();
  });

  it('nextStep  must skip step skipped', () => {
    component.currentStepNumber = 5;
    component.currentStep.completed = true;
    component.nextStep();

    expect(component.currentStep.id == component.getStepByNumber(7).id).toBeTruthy();
  });

  it('nextStep not work if current step is not complete', () => {
    component.nextStep();

    expect(component.currentStep.id == component.getStepByNumber(2).id).toBeTruthy();
  });

  it('nextStep must finish if current step is the last', () => {
    component.currentStepNumber = 7;
    component.currentStep.completed = true;
    component.nextStep();

    expect(component.status == CAStepByStepAbstract.STATUS_FINISHED).toBeTruthy();
  });

  it('nextStep not must work if last is skipped', () => {
    component.currentStepNumber = 7;
    component.getStepByNumber(8).skip = true;
    component.currentStep.completed = true;
    component.nextStep();

    expect(component.currentStep.id == component.getStepByNumber(7).id).toBeTruthy();
  });

  it('nextStep not must work if last is skipped', () => {
    component.currentStepNumber = 7;
    component.getStepByNumber(8).skip = true;
    component.currentStep.completed = true;
    component.nextStep();

    expect(component.status == CAStepByStepAbstract.STATUS_FINISHED).toBeTruthy();
  });

  it('previousStep must go to the previous step', () => {
    component.previousStep();

    expect(component.currentStep.id == component.steps[0].id).toBeTruthy();
  });

  it('previousStep must skip step skipped', () => {
    component.currentStepNumber = 7;
    component.previousStep();

    expect(component.currentStep.id == component.getStepByNumber(5).id).toBeTruthy();
  });

  it('previousStep not must work  if current step is the first', () => {
    component.currentStepNumber = 1;
    component.previousStep();

    expect(component.currentStep.id == component.getStepByNumber(1).id).toBeTruthy();
  });

  it('previousStep not must work if first is skipped', () => {
    component.getStepByNumber(1).skip = true;
    component.previousStep();

    expect(component.currentStep.id == component.getStepByNumber(2).id).toBeTruthy();
  });

  it('getStepByNumber must get correct step', () => {
    expect(component.getStepByNumber(4).id == component.steps[3].id).toBeTruthy();
  });

  it('enable must set status enable to stepBystep', () => {
    component.enable();

    expect(component.status == CAStepByStepAbstract.STATUS_ENABLED).toBeTruthy();
  });

  it('disable must set status disable to stepBystep', () => {
    component.disable();

    expect(component.status == CAStepByStepAbstract.STATUS_DISABLED).toBeTruthy();
  });

  it('finish must set finish status', () => {
    component.finish();

    expect(component.status == CAStepByStepAbstract.STATUS_FINISHED).toBeTruthy();
  });

  it('addStep must add aditional step to steps', () => {
    const step = new TestStep('generic');
    component.addStep(step);

    expect(component.getStepByNumber(9) == step).toBeTruthy();
  });

  it('nonSkippedStepCount must count non skipped steps', () => {
    expect(component.nonSkippedStepCount() == 7).toBeTruthy();
  });

  it('isCurrentStepTheLast when is no the last, result must be false', () => {
    expect(component.isCurrentStepTheLast()).toBeFalsy();
  });

  it('isCurrentStepTheLast when is the last, result must be true', () => {
    component.currentStepNumber = 8;

    expect(component.isCurrentStepTheLast()).toBeTruthy();
  });

  it('isCurrentStepTheLast when the next has a step skipped, result must be true', () => {
    component.addStep(new TestStep( 'generic', false, false, true));
    component.currentStepNumber = 8;

    expect(component.isCurrentStepTheLast()).toBeTruthy();
  });

  it('isCurrentStepTheFirst when is no the first, result must be false', () => {
    expect(component.isCurrentStepTheFirst()).toBeFalsy();
  });

  it('isCurrentStepTheFirst when is the first, result must be true', () => {
    component.currentStepNumber = 1;

    expect(component.isCurrentStepTheFirst()).toBeTruthy();
  });

  it('isCurrentStepTheFirst when the previous has a step skipped, result must be true', () => {
    component.getStepByNumber(1).skip = true;

    expect(component.isCurrentStepTheFirst()).toBeTruthy();
  });

});
