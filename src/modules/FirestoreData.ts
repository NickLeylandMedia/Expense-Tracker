/* Library Imports */
//Firestore SDK
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
  addDoc,
  getDoc,
} from "firebase/firestore/lite";

/* Module Declarations */
//Config
const firebaseConfig = {
  apiKey: "AIzaSyAfOoIv2Fud5bwLXbC_tY9OFzkl_SDZdbM",
  authDomain: "expense-tracker-a4802.firebaseapp.com",
  projectId: "expense-tracker-a4802",
  storageBucket: "expense-tracker-a4802.appspot.com",
  messagingSenderId: "481946847253",
  appId: "1:481946847253:web:ec0a207202a89fb283a61c",
  measurementId: "G-4N10W0WSWE",
};

// Initialize Firebase
const fireApp = initializeApp(firebaseConfig);
//const fireAnalytics = getAnalytics(fireApp);
const fireData = getFirestore(fireApp);

/* ----- { MODULE FUNCTIONS } -----*/

/* Data Retrieval Functions */
//Get all documents from collection
const getAllDocs = async (Collection: string): Promise<any[]> => {
  let baseQuery = await getDocs(collection(fireData, "Transactions"));
  let docs: any[] = [];
  baseQuery.forEach((doc) => docs.push(doc.data()));
  return docs;
};

export { getAllDocs };
