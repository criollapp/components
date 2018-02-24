import { XGeneratorUtil } from "@x/common";
import { CAStepAbstract } from "../../abstracts/ca-step.abstract";

export class TestStep extends CAStepAbstract
{
  protected getIdFrom():string
  {
    return XGeneratorUtil.getFakeId().toString();
  }

  protected getTypeFrom():string
  {
    return 'test';
  }

  protected load()
  {
    this.alreadyLoaded.emit();
  }
}
