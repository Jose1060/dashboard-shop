import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDoKY9MxDf-LCwNiI7om_0NcSlibMnqGjY",
	authDomain: "shop-backend-eb049.firebaseapp.com",
	projectId: "shop-backend-eb049",
	storageBucket: "shop-backend-eb049.appspot.com",
	messagingSenderId: "1059390771625",
	appId: "1:1059390771625:web:0af47a86a9b8f69ba134b8",
	measurementId: "G-KK121FK49N",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
