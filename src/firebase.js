import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import {firebaseConfig as firebaseConfigSave} from './firebaseConfig'

const firebaseConfig = firebaseConfigSave;

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
