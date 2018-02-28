import { CAGeneratorUtil } from "@criollapp/common";

export class TestCAComponentsUtil
{
  public static resetStaticValues():void
  {
      CAGeneratorUtil.maxIdNumber = CAGeneratorUtil.initialMaxIsNumber;
  }
}
