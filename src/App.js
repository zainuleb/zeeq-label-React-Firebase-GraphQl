//Importing Packages
import { Switch, Route } from 'react-router-dom';

//Importing Styles
import './App.css';

//Importing Components
import Homepage from './pages/homepage/Homepage';
import Hats from './pages/hats/Hats';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/hats" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
