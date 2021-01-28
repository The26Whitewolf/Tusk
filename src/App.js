import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./pages/About";
import TaskList from "./pages/TaskList";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";
import AddTask from "./pages/AddTask";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import FirebaseContext from "./contexts/FirebaseContext";

firebase.initializeApp({
  apiKey: "AIzaSyBe6SbjaNfgOpVZxClS8ZaOR88v36LmGJc",
  authDomain: "tusk-16358.firebaseapp.com",
  projectId: "tusk-16358",
  storageBucket: "tusk-16358.appspot.com",
  messagingSenderId: "134028942615",
  appId: "1:134028942615:web:9ddf9ff91d599fb6502b52",
});

const auth = firebase.auth();
const store = firebase.firestore();

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <FirebaseContext.Provider value={{ auth, store }}>
      <Router>
        <div className="app">
          {user ? (
            <>
              <Route exact path="/" component={TaskList} />
              <Route exact path="/add" component={AddTask} />
              <Route exact path="/sign-out" component={SignOut} />
            </>
          ) : (
            <Route path="/" component={SignIn} />
          )}
          <Route exact path="/about" component={About} />
          <Footer />
        </div>
      </Router>
    </FirebaseContext.Provider>
  );
};

export default App;
