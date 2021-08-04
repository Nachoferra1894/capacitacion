import './App.css';
import {HashRouter,Switch,Route} from 'react-router-dom'
import Home from './pages/Home.js';
import MainNavbar from './components/MainNavbar';

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <MainNavbar/>
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
