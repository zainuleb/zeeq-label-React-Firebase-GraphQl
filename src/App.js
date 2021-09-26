//Importing Packages
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { auth, createUserProfileDocument } from "./db/firebase/firebase.utils";
//Importing Styles
import "./App.scss";

//Importing Components
import Header from "./Components/header/Header.js";
import Homepage from "./pages/homepage/Homepage.js";
import SignInUp from "./pages/sign/SignInUp";
import Shop from "./pages/shop/Shop.js";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  let unSubFromAuth = null;

  useEffect(() => {
    unSubFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({ id: snapshot.id, ...snapshot.data() });
        });
      }
      setCurrentUser({ currentUser: userAuth });
    });
    return () => {
      unSubFromAuth();
    };
  }, []);

  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/sign" component={SignInUp} />
      </Switch>
    </div>
  );
}

export default App;
