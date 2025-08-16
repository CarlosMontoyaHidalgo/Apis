// config/firebase.js
import admin from 'firebase-admin';
import dotenv from 'dotenv';

dotenv.config();

let serviceAccount = {};
try {
  serviceAccount = JSON.parse(process.env.FIREBASE_CONFIG || '{}');
} catch (error) {
  console.error('Invalid FIREBASE_CONFIG JSON:', error);
  serviceAccount = {};
}

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();

export { admin, db };
