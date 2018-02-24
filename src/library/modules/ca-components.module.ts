import { NgModule } from '@angular/core';
import { CAlertComponent } from "../components/alert/ca-alert.component";
import { CAStepByStepComponent } from "../components/step-by-step/ca-step-by-step.component";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule],
  declarations: [ CAlertComponent, CAStepByStepComponent ],
  providers: [],
  exports: [ CAlertComponent, CAStepByStepComponent ]
})
export class CAComponentsModule { }
