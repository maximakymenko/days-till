/* eslint-disable consistent-return */
import { firebase } from '../firebase';

export const askForPermissioToReceiveNotifications = async () => {
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    localStorage.setItem('notifications-token', token);
    return token;
  } catch (error) {
    console.error(error);
  }
};
