import { firebaseDatabase } from '../firebase';

const url = new URL('https://api.themoviedb.org/3/movie/upcoming');
const FIREBASE_URL = 'https://fcm.googleapis.com/fcm/send';
const params = { api_key: process.env.REACT_APP_API_KEY };

const REGION = '&region=US';

url.search = new URLSearchParams(params);

export const fetchMoviesAPI = async () => {
  const response = await fetch(`${url}${REGION}`);
  const { results } = await response.json();

  return results;
};

export const sendUserNotification = async (title, body) => {
  await fetch(FIREBASE_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `key=${process.env.REACT_APP_FIREBASE_SERVER_KEY}`,
    },
    body: JSON.stringify({
      data: {
        sound: 'default',
        title,
        body,
      },
      to: localStorage.getItem('notifications-token'),
    }),
  });
};

export const fetchMoviesFromDatabase = async () => {
  const results = [];
  await firebaseDatabase.ref('/movies').once('value', snap => snap.forEach((data) => {
    results.push(data.val());
  }));
  return results;
};
