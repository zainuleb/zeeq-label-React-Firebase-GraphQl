//Importing Packages
import { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from "./db/firebase/firebase.utils";

//Import Redux
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/actions/user.actions";

//Importing Styles
import "./App.scss";

//Importing Components
import Header from "./Components/header/Header.js";
import Homepage from "./pages/homepage/Homepage.js";
import SignInUp from "./pages/sign/SignInUp";
import Shop from "./pages/shop/Shop.js";

function App(props) {
  let unSubFromAuth = null;

  const { setCurrentUser } = props;
  console.log(setCurrentUser);

  useEffect(() => {
    // eslint-disable-next-line
    unSubFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({ id: snapshot.id, ...snapshot.data() });
        });
      }
      setCurrentUser(userAuth);
    });
    return () => {
      unSubFromAuth();
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
        <Route
          exact
          path="/sign"
          render={() =>
            props.currentUser ? <Redirect to="/" /> : <SignInUp />
          }
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
