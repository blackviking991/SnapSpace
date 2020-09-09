import React, { useState, useEffect } from "react";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";
import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";
import fire from "./firebase/config";
import Login from "./comps/login";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearinput = () => {
    setEmail("");
    setPassword("");
  };

  const clearerrors = () => {
    setEmailError("");
    setPasswordError("");
  };
  const handleLogin = () => {
    clearerrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };
  const handlesignup = () => {
    clearerrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };
  const handlelogout = () => {
    fire.auth().signOut();
  };
  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearinput();
        setUser(user);
      } else {
        setUser(null);
      }
    });
  };
  useEffect(() => {
    authListener();
  });

  return (
    <div className="App">
      {user ? (
        <>
          <Title handlelogout={handlelogout} />
          <UploadForm />
          <ImageGrid setSelectedImg={setSelectedImg} />
          {selectedImg && (
            <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
          )}
        </>
      ) : (
        <Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handlesignup={handlesignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
        />
      )}
    </div>
  );
}

export default App;
