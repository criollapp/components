import { Component, ViewChild } from "@angular/core";
import { CAlertComponent } from "../../components/alert/ca-alert.component";
import { CAlertClass } from "../../class/ca-alert.class";

@Component({
  template:`
    <ca-alert (close)="closed()" [alert]="alert"></ca-alert>
  `})
export class TestXAlertContainerComponent
{
  @ViewChild(CAlertComponent) public alertComponent: CAlertComponent;
  public alert:CAlertClass = new CAlertClass();

  public closed()
  {
  }
}

