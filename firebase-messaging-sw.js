importScripts('https://www.gstatic.com/firebasejs/10.11.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.11.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyAgFViex6zTL7wEKDFrDpIAL7rS_wXZCCE',
  appId: '1:899785996702:web:21c78da1d79812f9f8fe8f',
  messagingSenderId: '899785996702',
  projectId: 'my-bule-project',
  authDomain: 'my-bule-project.firebaseapp.com',
  storageBucket: 'my-bule-project.firebasestorage.app',
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || 'Bulebuy';
  const options = {
    body: payload.notification?.body || '',
    icon: '/icons/apple-touch-icon.png',
    data: payload.data || {},
  };

  return self.registration.showNotification(title, options);
});
