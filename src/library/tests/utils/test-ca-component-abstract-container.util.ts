import { CAComponentAbstract } from "../../abstracts/ca-component.abstract";
import { Component, ViewChild } from "@angular/core";
import { CACssFrameworkAbstract } from "@criollapp/theme";
import { TestCAComponentAbstract } from "./test-ca-component-abstract.util";

@Component({
  selector: 'component-abstract-container',
  template: ` <test-component-abstract [frameworkName]="myName"></test-component-abstract> `
})
export class TestCAComponentAbstractContainer extends CAComponentAbstract
{
  @ViewChild(TestCAComponentAbstract) public abstractComponent: TestCAComponentAbstract;

  public myName:string;

  constructor(){
    super();

    this.myName = CACssFrameworkAbstract.FRAMEWORK_MATERIAL;
  }
}
