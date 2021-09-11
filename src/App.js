//Importing Packages
import { Switch, Route } from 'react-router-dom';

//Importing Styles
import './App.css';

//Importing Components
import Homepage from './pages/homepage/Homepage.js';
import Shop from './pages/shop/Shop.js';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
