import { App as AntdApp, theme } from 'antd';
import type { MessageInstance } from 'antd/es/message/interface';
import type { ModalStaticFunctions } from 'antd/es/modal/confirm';
import type { NotificationInstance } from 'antd/es/notification/interface';

export let message: MessageInstance;
export let notification: NotificationInstance;
export let modal: Omit<ModalStaticFunctions, 'warn'>;

const AppBinder = () => {
  const tokens = theme.useToken();
  console.log({ tokens });
  const staticFunction = AntdApp.useApp();

  message = staticFunction.message;
  modal = staticFunction.modal;
  notification = staticFunction.notification;

  return <></>;
};

export default AppBinder;
