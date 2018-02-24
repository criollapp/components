import { CAComponentAbstract } from "../../abstracts/ca-component.abstract";
import { Component, ViewChild } from "@angular/core";
import { XCssFrameworkAbstract } from "@x/theme";
import { CAlertComponent } from "../../components/alert/ca-alert.component";
import { TestXComponentAbstract } from "./test-ca-component-abstract.util";

@Component({
  selector: 'component-abstract-container',
  template: ` <test-component-abstract [frameworkName]="myName"></test-component-abstract> `
})
export class TestXComponentAbstractContainer extends CAComponentAbstract
{
  @ViewChild(TestXComponentAbstract) public abstractComponent: TestXComponentAbstract;

  public myName:string;

  constructor(){
    super();

    this.myName = XCssFrameworkAbstract.FRAMEWORK_MATERIAL;
  }
}
