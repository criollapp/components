import { XGeneratorUtil } from "@x/common";

export class TestXComponentsUtil
{
  public static resetStaticValues():void
  {
    XGeneratorUtil.maxIdNumber = XGeneratorUtil.initialMaxIsNumber;
  }
}
