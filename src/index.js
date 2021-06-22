import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { createStore } from "redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import { Provider } from "react-redux";
import { rootReducer } from "./reducers";

// firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDPPBRfSGzmCwzYZrDNy5xaQLVn8mqdM_w",
  authDomain: "skillchat-a14b8.firebaseapp.com",
  databaseURL: "https://skillchat-a14b8-default-rtdb.firebaseio.com",
  projectId: "skillchat-a14b8",
  storageBucket: "skillchat-a14b8.appspot.com",
  messagingSenderId: "627411995064",
  appId: "1:627411995064:web:7c7065ab680b36466b274d",
  measurementId: "G-HX8KRB2C7B",
};

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const initialState = {};
const store = createStore(rootReducer, initialState);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, //since we are using Firestore
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
