import { TestCAComponentAbstract } from "../utils/test-ca-component-abstract.util";
import { CACssFrameworkGeneric, CACssFrameworkBootstrap, CACssFrameworkMaterial, CACssFrameworkAbstract } from "@criollapp/theme";
import { ComponentFixture } from "@angular/core/testing";
import { TestCAComponentAbstractContainer } from "../utils/test-ca-component-abstract-container.util";
import { TestBed } from "@angular/core/testing";
import { async } from "@angular/core/testing";

describe('CAComponentAbstract',()=>{
  let object:TestCAComponentAbstract = new TestCAComponentAbstract();

  let componentContainer: TestCAComponentAbstractContainer;
  let fixtureContainer: ComponentFixture<TestCAComponentAbstractContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [TestCAComponentAbstract, TestCAComponentAbstractContainer]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixtureContainer = TestBed.createComponent(TestCAComponentAbstractContainer);
    componentContainer = fixtureContainer.componentInstance;
    fixtureContainer.detectChanges();
  });

  it('cssFramework has an instance of CACssFrameworkGeneric by default',()=>{
    expect( object.cssFramework instanceof CACssFrameworkGeneric ).toBeTruthy();
  });

  it('isGeneric return  true when is generic',()=>{
    expect( object.isGeneric() ).toBeTruthy();
  });

  it('isGeneric return false when is not generic',()=>{
    object.cssFramework = new CACssFrameworkBootstrap();
    expect( object.isGeneric() ).toBeFalsy();
  });

  it('isBootstrap return  true when is bootstrap',()=>{
    expect( object.isBootstrap() ).toBeTruthy();
  });

  it('isBootstrap return false when is not bootstrap',()=>{
    object.cssFramework = new CACssFrameworkMaterial();
    expect( object.isBootstrap() ).toBeFalsy();
  });

  it('isMaterial return  true when is material',()=>{
    expect( object.isMaterial() ).toBeTruthy();
  });

  it('isMaterial return false when is not material',()=>{
    object.cssFramework = new CACssFrameworkGeneric();
    expect( object.isMaterial() ).toBeFalsy();
  });

  it('setGeneric convert component in generic',()=>{
    object.setGeneric();

    expect( object.isGeneric() ).toBeTruthy()
  });

  it('setBootstrap convert component in bootstrap',()=>{
    object.setBootstrap();

    expect( object.isBootstrap() ).toBeTruthy();
  });

  it('setMaterial convert component in material',()=>{
    object.setMaterial();

    expect( object.isMaterial() ).toBeTruthy();
  });

  it('frameworkName when is generic, cssFramework must be CACssFrameworkGeneric',()=>{
    object.frameworkName = CACssFrameworkAbstract.FRAMEWORK_GENERIC;

    expect( object.isGeneric() ).toBeTruthy();
  });

  it('frameworkName when is bootstrap, cssFramework must be CACssFrameworkBootstrap',()=>{
    object.frameworkName = CACssFrameworkAbstract.FRAMEWORK_BOOTSTRAP;

    expect( object.isBootstrap() ).toBeTruthy();
  });

  it('frameworkName when is material, cssFramework must be CACssFrameworkMaterial',()=>{
    object.frameworkName = CACssFrameworkAbstract.FRAMEWORK_MATERIAL;

    expect( object.isMaterial() ).toBeTruthy();
  });

  it('get frameworkName must return the correct',()=>{
    object.frameworkName = CACssFrameworkAbstract.FRAMEWORK_MATERIAL;

    expect( object.frameworkName == CACssFrameworkAbstract.FRAMEWORK_MATERIAL ).toBeTruthy();
  });

  it('frameworkName has Input decorator', ()=>{
    expect( componentContainer.abstractComponent.isMaterial() ).toBeTruthy();
  });

});
