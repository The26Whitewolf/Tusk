import React, { useContext } from "react";
import firebase from "firebase";
import Layout from "../components/Layout";
import FirebaseContext from "../contexts/FirebaseContext";
import { useHistory } from "react-router-dom";

function SignIn() {
  const history = useHistory();
  const { auth } = useContext(FirebaseContext);

  async function singInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider);
    history.push("/");
  }

  return (
    <Layout>
      <div>
        <h3>Sing in with:</h3>
        <button onClick={singInWithGoogle}>Google</button>
      </div>
    </Layout>
  );
}

export default SignIn;
