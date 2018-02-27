import { CAGeneratorUtil } from "@criollapp/common";

export class TestXComponentsUtil
{
  public static resetStaticValues():void
  {
      CAGeneratorUtil.maxIdNumber = CAGeneratorUtil.initialMaxIsNumber;
  }
}
