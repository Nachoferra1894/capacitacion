import './App.css';
import {HashRouter,Switch,Route} from 'react-router-dom'
import Home from './pages/Home/Home.js';

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route> 
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
