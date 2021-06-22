import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/firestore";
import { createStore, combineReducers } from "redux";
import { ReactReduxFirebaseProvider, firebaseReducer } from "react-redux-firebase";
import { createFirestoreInstance, firestoreReducer } from "redux-firestore";
import { Provider } from "react-redux";

// firebase config
const fbConfig = {
  apiKey: "AIzaSyDPPBRfSGzmCwzYZrDNy5xaQLVn8mqdM_w",
  authDomain: "skillchat-a14b8.firebaseapp.com",
  databaseURL: "https://skillchat-a14b8-default-rtdb.firebaseio.com",
  projectId: "skillchat-a14b8",
  storageBucket: "skillchat-a14b8.appspot.com",
  messagingSenderId: "627411995064",
  appId: "1:627411995064:web:7c7065ab680b36466b274d",
  measurementId: "G-HX8KRB2C7B",
};
// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};
// Initialize firebase instance
firebase.initializeApp(fbConfig);
firebase.firestore();
// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});
// Create store with reducers and initial state
const initialState = {};
const store = createStore(rootReducer, initialState);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
