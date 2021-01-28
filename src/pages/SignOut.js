import React, { useContext, useEffect, useState } from "react";
import FirebaseContext from "../contexts/FirebaseContext";
import { Redirect } from "react-router-dom";

function SignOut() {
  const { auth } = useContext(FirebaseContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth.signOut().then(() => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  } else {
    return <Redirect to="/sign-in" />;
  }
}

export default SignOut;
