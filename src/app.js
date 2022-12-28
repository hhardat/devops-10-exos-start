// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAZJSDe-XcdeO8R-RA77CzF5g_csrvkC0",
  authDomain: "exo-devops-project.firebaseapp.com",
  projectId: "exo-devops-project",
  storageBucket: "exo-devops-project.appspot.com",
  messagingSenderId: "958807008176",
  appId: "1:958807008176:web:919933ec28b4f3d5e62c75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const getCurrentMonth = (date = new Date()) => {
    const currentMonth = date.getMonth();

    return months[currentMonth];
};

const isAdmin = (userId) => userId === "admin" || userId === "sudo";

try {
    document.getElementById("month").innerText = getCurrentMonth();
} catch (err) {
    console.error(JSON.stringify(err));
}

const removeXNames = (names, nameToRemove) => {
    return names.filter(
        (name) => !name.toLowerCase().includes(nameToRemove.toLowerCase())
    );
};

exports.getCurrentMonth = getCurrentMonth;
exports.isAdmin = isAdmin;
exports.removeXNames = removeXNames;
