import firebase from './firebase';

const messageCollection = firebase.firestore().collection('messages');

export default {
  messages() {
    return messageCollection.orderBy('datetime', 'asc');
  },
  post(message) {
    return messageCollection.add(message);
  }
};
