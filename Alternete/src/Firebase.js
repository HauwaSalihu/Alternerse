import firebase from 'firebase';

const settings = {};

const config = {
  apiKey: "AIzaSyBGQClXj9C9plM9eCODPvpqaJgv3UXmU_w",
  databaseURL: "https://djmaware.firebaseio.com",
  projectId: "djmaware"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;