import { App as AntdApp } from 'antd';
import type { MessageInstance } from 'antd/es/message/interface';
import type { ModalStaticFunctions } from 'antd/es/modal/confirm';
import type { NotificationInstance } from 'antd/es/notification/interface';

export let message: MessageInstance;
export let notification: NotificationInstance;
export let modal: Omit<ModalStaticFunctions, 'warn'>;

export const AppBinder = () => {
  const staticFunction = AntdApp.useApp();

  message = staticFunction.message;
  modal = staticFunction.modal;
  notification = staticFunction.notification;

  return <></>;
};
