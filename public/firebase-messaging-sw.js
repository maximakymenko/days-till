/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

firebase.initializeApp({
  messagingSenderId: '45115156228',
});

// eslint-disable-next-line no-unused-vars
const messaging = firebase.messaging();
