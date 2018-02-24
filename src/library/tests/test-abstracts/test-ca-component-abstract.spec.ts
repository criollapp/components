import { TestXComponentAbstract } from "../utils/test-ca-component-abstract.util";
import { XCssFrameworkGeneric, XCssFrameworkBootstrap, XCssFrameworkMaterial, XCssFrameworkAbstract } from "@x/theme";
import { ComponentFixture } from "@angular/core/testing";
import { TestXComponentAbstractContainer } from "../utils/test-ca-component-abstract-container.util";
import { TestBed } from "@angular/core/testing";
import { async } from "@angular/core/testing";

describe('CAComponentAbstract',()=>{
  let object:TestXComponentAbstract = new TestXComponentAbstract();

  let componentContainer: TestXComponentAbstractContainer;
  let fixtureContainer: ComponentFixture<TestXComponentAbstractContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [TestXComponentAbstract, TestXComponentAbstractContainer]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixtureContainer = TestBed.createComponent(TestXComponentAbstractContainer);
    componentContainer = fixtureContainer.componentInstance;
    fixtureContainer.detectChanges();
  });

  it('cssFramework has an instance of XCssFrameworkGeneric by default',()=>{
    expect( object.cssFramework instanceof XCssFrameworkGeneric ).toBeTruthy();
  });

  it('isGeneric return  true when is generic',()=>{
    expect( object.isGeneric() ).toBeTruthy();
  });

  it('isGeneric return false when is not generic',()=>{
    object.cssFramework = new XCssFrameworkBootstrap();
    expect( object.isGeneric() ).toBeFalsy();
  });

  it('isBootstrap return  true when is bootstrap',()=>{
    expect( object.isBootstrap() ).toBeTruthy();
  });

  it('isBootstrap return false when is not bootstrap',()=>{
    object.cssFramework = new XCssFrameworkMaterial();
    expect( object.isBootstrap() ).toBeFalsy();
  });

  it('isMaterial return  true when is material',()=>{
    expect( object.isMaterial() ).toBeTruthy();
  });

  it('isMaterial return false when is not material',()=>{
    object.cssFramework = new XCssFrameworkGeneric();
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

  it('frameworkName when is generic, cssFramework must be XCssFrameworkGeneric',()=>{
    object.frameworkName = XCssFrameworkAbstract.FRAMEWORK_GENERIC;

    expect( object.isGeneric() ).toBeTruthy();
  });

  it('frameworkName when is bootstrap, cssFramework must be XCssFrameworkBootstrap',()=>{
    object.frameworkName = XCssFrameworkAbstract.FRAMEWORK_BOOTSTRAP;

    expect( object.isBootstrap() ).toBeTruthy();
  });

  it('frameworkName when is material, cssFramework must be XCssFrameworkMaterial',()=>{
    object.frameworkName = XCssFrameworkAbstract.FRAMEWORK_MATERIAL;

    expect( object.isMaterial() ).toBeTruthy();
  });

  it('get frameworkName must return the correct',()=>{
    object.frameworkName = XCssFrameworkAbstract.FRAMEWORK_MATERIAL;

    expect( object.frameworkName == XCssFrameworkAbstract.FRAMEWORK_MATERIAL ).toBeTruthy();
  });

  it('frameworkName has Input decorator', ()=>{
    expect( componentContainer.abstractComponent.isMaterial() ).toBeTruthy();
  });

});
