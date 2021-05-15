import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA-QRBfukTOgkbMjPw2ThtwbkaJ9qma1ss",
    authDomain: "crwn-db-f970e.firebaseapp.com",
    projectId: "crwn-db-f970e",
    storageBucket: "crwn-db-f970e.appspot.com",
    messagingSenderId: "655066079052",
    appId: "1:655066079052:web:d91b993159b782f85a39e9",
    measurementId: "G-BM4KPTJS3J"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if(!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get()

	if(!snapShot.exist) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		}
		catch (error) {
			console.error('error creating user', error.message);
		}
	}

	return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();

export const  firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;