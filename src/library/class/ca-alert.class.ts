import {XClassAbstract} from '@x/common';

export class CAlertClass extends XClassAbstract {

  static readonly TYPE_WARNING = 'warning';
  static readonly TYPE_INFO = 'info';
  static readonly TYPE_SUCCESS = 'success';
  static readonly TYPE_DANGER = 'danger';

  public message = '';
  public type = '';
  public key = '';
  public allowClose: boolean;

  constructor(message: string = '', type: string = '', key = '', allowClose = false) {
    super();

    this.message = message;
    this.type = type == '' ? CAlertClass.TYPE_INFO : type;
    this.key = key;
    this.allowClose = allowClose;
  }

  public static alertExists( alerts: CAlertClass[], messageToSearch: string): Boolean {
    return alerts.filter((alert: CAlertClass) => alert.message === messageToSearch || alert.key === messageToSearch ).length > 0;
  }

  public setInfoType()
  {
    this.type = CAlertClass.TYPE_INFO;
  }

  public setWarningType()
  {
    this.type = CAlertClass.TYPE_WARNING;
  }

  public setSuccessType()
  {
    this.type = CAlertClass.TYPE_SUCCESS;
  }

  public setDangerType()
  {
    this.type = CAlertClass.TYPE_DANGER;
  }
}
