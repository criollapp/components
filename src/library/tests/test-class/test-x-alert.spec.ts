import {CAlertClass} from '../../class/ca-alert.class';

describe('CAlertClass', () => {
  let alert:CAlertClass = new CAlertClass();

  it('alertExist method return true if alert message exists', () => {
    const alerts: CAlertClass[] = [new CAlertClass('test message', 'error')];

    expect(CAlertClass.alertExists(alerts, 'test message')).toBeTruthy();
  });

  it('alertExist method return false if alert message not exists', () => {
    const alerts: CAlertClass[] = [new CAlertClass('test message exists', 'error')];

    expect(CAlertClass.alertExists(alerts, 'test message')).toBeFalsy();
  });

  it('alertExist method return false if alerts are empty', () => {
    const alerts: CAlertClass[] = [];

    expect(CAlertClass.alertExists(alerts, 'test message')).toBeFalsy();
  });

  it('setInfoType method set alert to info', () => {
    alert.setInfoType();

    expect(alert.type == CAlertClass.TYPE_INFO).toBeTruthy();
  });

  it('setWarningType method set alert to warning', () => {
    alert.setWarningType();

    expect(alert.type == CAlertClass.TYPE_WARNING).toBeTruthy();
  });

  it('setSuccessType method set alert to success', () => {
    alert.setSuccessType();

    expect(alert.type == CAlertClass.TYPE_SUCCESS).toBeTruthy();
  });

  it('setDangerType method set alert to danger', () => {
    alert.setDangerType();

    expect(alert.type == CAlertClass.TYPE_DANGER).toBeTruthy();
  });

  it('default type  is info', () => {
    let other:CAlertClass = new CAlertClass();

    expect(other.type == CAlertClass.TYPE_INFO).toBeTruthy();
  });
});
