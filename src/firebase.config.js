import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDNfxOMSlJzFxd-98-ik80G42T2ekOdQ0U',
  authDomain: 'fir-start-f0ee0.firebaseapp.com',
  databaseURL: 'https://fir-start-f0ee0-default-rtdb.firebaseio.com',
  projectId: 'fir-start-f0ee0',
  storageBucket: 'fir-start-f0ee0.appspot.com',
  messagingSenderId: '50144289262',
  appId: '1:50144289262:web:437ccded48540391482eff',
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
