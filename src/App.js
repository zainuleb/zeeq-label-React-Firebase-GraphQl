//Importing Packages
import { Switch, Route } from 'react-router-dom';

//Importing Styles
import './App.scss';

//Importing Components
import Header from './Components/header/Header.js';
import Homepage from './pages/homepage/Homepage.js';
import SignInUp from './pages/sign/SignInUp';
import Shop from './pages/shop/Shop.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/sign" component={SignInUp} />
      </Switch>
    </div>
  );
}

export default App;
