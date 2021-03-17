import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCT83wW_9-78wffIu0hfioamBA9jdVVdOI",
    authDomain: "skincare-webstore-db.firebaseapp.com",
    projectId: "skincare-webstore-db",
    storageBucket: "skincare-webstore-db.appspot.com",
    messagingSenderId: "1056984259845",
    appId: "1:1056984259845:web:625965c884e7faca3deb6c",
    measurementId: "G-L3G5D7DB19"
};



firebase.initializeApp(config);
//firebase.analytics();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const convertCollectionsSnapshotToMap = (collections)=> {
  const transformedCollection = collections.docs.map(doc => {
    const {title, items, slug} = doc.data()
    return {
      slug,
      routeName: encodeURI(slug),
      id: doc.id,
      title,
      items,
    }
  })
  return transformedCollection.reduce((accumulator, currentArray)=>{
    accumulator[currentArray.slug.toLowerCase()] = currentArray
    return accumulator
  },{})
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
