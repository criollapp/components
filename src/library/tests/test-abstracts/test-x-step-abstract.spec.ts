import { TestStep } from "../utils/test-ca-step.util";
import { TestXComponentsUtil } from "../utils/test-ca-components.util";

describe('CAStepAbstract', () => {
  let step:TestStep;

  beforeEach(() => {
    TestXComponentsUtil.resetStaticValues();
    step = new TestStep('generic');
  });

  it('current is false by default', () => {
    expect(step.current).toBeFalsy();
  });

  it('disabled is true by default', () => {
    expect(step.disabled).toBeTruthy();
  });

  it('skip is false by default', () => {
    expect(step.skip).toBeFalsy();
  });

  it('completed is false by default', () => {
    expect(step.completed).toBeFalsy();
  });

  it('loaded is false by default', () => {
    expect(step.loaded).toBeFalsy();
  });

  it('loaded is true when loadCompleted is called', () => {
    step.loadCompleted();

    expect(step.loaded).toBeTruthy();
  });
});
