import {Component} from '@angular/core';
import { CAStepByStepAbstract } from "../../abstracts/ca-step-by-step.abstract";
import { TestStep } from "./test-ca-step.util";

@Component({template: ''})
export class XTestStepByStepComponent extends CAStepByStepAbstract {

  protected build():void
  {
    this.addStep( new TestStep('generic') );
    this.addStep( new TestStep('generic', true) );
    this.addStep( new TestStep('generic') );
    this.addStep( new TestStep('generic',false, true ) );
    this.addStep( new TestStep('generic') );
    this.addStep( new TestStep('generic',false, false, true) );
    this.addStep( new TestStep('generic') );
    this.addStep( new TestStep('generic') );
  }
}
