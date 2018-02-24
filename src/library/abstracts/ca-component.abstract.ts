import {XClassAbstract} from '@x/common';
import { IXCssFramework, XCssFrameworkGeneric, XCssFrameworkAbstract, XCssFrameworkBootstrap, XCssFrameworkMaterial } from "@x/theme";
import { Input } from "@angular/core";

export abstract class CAComponentAbstract extends XClassAbstract {
  public cssFramework:IXCssFramework;

  constructor()
  {
    super();

    this.setGeneric();
  }

  get frameworkName()
  {
    return this.cssFramework.name;
  }

  @Input() set frameworkName(name:string)
  {
    switch(name)
    {
      case XCssFrameworkAbstract.FRAMEWORK_BOOTSTRAP:
        this.cssFramework = new XCssFrameworkBootstrap();
        break;
      case XCssFrameworkAbstract.FRAMEWORK_MATERIAL:
        this.cssFramework = new XCssFrameworkMaterial();
        break;
      default:
        this.cssFramework = new XCssFrameworkGeneric();
    }
  }

  public setGeneric()
  {
    this.cssFramework = new XCssFrameworkGeneric();
  }

  public isGeneric()
  {
    return this.cssFramework instanceof XCssFrameworkGeneric;
  }

  public setBootstrap()
  {
    this.cssFramework = new XCssFrameworkBootstrap();
  }

  public isBootstrap()
  {
    return this.cssFramework instanceof XCssFrameworkBootstrap;
  }

  public setMaterial()
  {
    this.cssFramework = new XCssFrameworkMaterial();
  }

  public isMaterial()
  {
    return this.cssFramework instanceof XCssFrameworkMaterial;
  }
}
