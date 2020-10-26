// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyCgacWpjQHAPHCV3PJGOMvLEdFneqC3vbo',
	authDomain: 'clone-cc3ef.firebaseapp.com',
	databaseURL: 'https://clone-cc3ef.firebaseio.com',
	projectId: 'clone-cc3ef',
	storageBucket: 'clone-cc3ef.appspot.com',
	messagingSenderId: '5045968347',
	appId: '1:5045968347:web:d46b3f3c3394e137ac1bfe',
	measurementId: 'G-PQ16KLVQCC',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
