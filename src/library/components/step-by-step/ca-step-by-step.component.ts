import {Component} from '@angular/core';
import { CAStepByStepAbstract } from "../../abstracts/ca-step-by-step.abstract";

@Component({
  selector: "ca-step-by-step",
  templateUrl: "ca-step-by-step.component.html",
  styleUrls: ["ca-step-by-step.component.css"]
})
export class CAStepByStepComponent extends CAStepByStepAbstract
{
  protected build():void
  {

  }
}
