import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firestore = firebase.firestore();

firestore
  .collection('users')
  .doc('1sDhBQhzhQoUOmsXuKWI')
  .collection('cartItems')
  .doc('q1QadlaTOVH6YqSJe6HR');
