import {CAClassAbstract} from '@criollapp/common';
import { ICACssFramework, CACssFrameworkGeneric, CACssFrameworkAbstract, CACssFrameworkBootstrap, CACssFrameworkMaterial } from "@criollapp/theme";
import { Input } from "@angular/core";

export abstract class CAComponentAbstract extends CAClassAbstract {
  public cssFramework:ICACssFramework;

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
      case CACssFrameworkAbstract.FRAMEWORK_BOOTSTRAP:
        this.cssFramework = new CACssFrameworkBootstrap();
        break;
      case CACssFrameworkAbstract.FRAMEWORK_MATERIAL:
        this.cssFramework = new CACssFrameworkMaterial();
        break;
      default:
        this.cssFramework = new CACssFrameworkGeneric();
    }
  }

  public setGeneric()
  {
    this.cssFramework = new CACssFrameworkGeneric();
  }

  public isGeneric()
  {
    return this.cssFramework instanceof CACssFrameworkGeneric;
  }

  public setBootstrap()
  {
    this.cssFramework = new CACssFrameworkBootstrap();
  }

  public isBootstrap()
  {
    return this.cssFramework instanceof CACssFrameworkBootstrap;
  }

  public setMaterial()
  {
    this.cssFramework = new CACssFrameworkMaterial();
  }

  public isMaterial()
  {
    return this.cssFramework instanceof CACssFrameworkMaterial;
  }
}
