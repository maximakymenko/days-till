import { firebaseDatabase } from '../firebase';

const url = new URL('https://api.themoviedb.org/3/movie/upcoming');
const params = { api_key: process.env.REACT_APP_API_KEY };

const REGION = '&region=US';

url.search = new URLSearchParams(params);

export const fetchMoviesAPI = async () => {
  const response = await fetch(`${url}${REGION}`);
  const { results } = await response.json();

  return results;
};

export const sendUserNotification = async () => {
  await fetch('https://fcm.googleapis.com/fcm/send ', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'key=AAAACoESpwQ:APA91bH1fTzG16ddQ0WUHCfAjiALa8EMxP-3UJsiZaYsvQaMSQfEfWrhe1tKJgwQGtAKpbHw3NQp5ivIvUkXzqO_BxIrEd70uRpaP0bT-1eTurnQ-8mNtvbHdExqmqUITr0OtwI9bg4K',
    },
    body: JSON.stringify({
      data: {
        sound: 'default',
        title: 'movie project',
        body: 'it worked',
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
