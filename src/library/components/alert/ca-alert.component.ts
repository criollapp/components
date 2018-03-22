import { CAComponentAbstract } from "../../abstracts/ca-component.abstract";
import { Component, Input, EventEmitter, Output } from "@angular/core";
import { CAlertClass } from "@criollapp/common";

@Component({
  selector: 'ca-alert',
  templateUrl: 'ca-alert.component.html'
})
export class CAlertComponent extends CAComponentAbstract
{
  @Input() public alert:CAlertClass;
  @Output() public close:EventEmitter<CAlertClass> = new EventEmitter<CAlertClass>();

  constructor()
  {
    super();

    this.alert = new CAlertClass();
  }

  get alertClass()
  {
    let classArray:string[] = ['ca-alert'];
    if(this.isBootstrap())
    {
      classArray.push('alert');
      classArray.push('alert-'+this.alert.type);
      if(this.alert.allowClose)
      {
        classArray.push('alert-dismissable');
      }
    }
    return classArray;
  }

  closeAlert()
  {
    this.close.emit( this.alert );
  }
}
