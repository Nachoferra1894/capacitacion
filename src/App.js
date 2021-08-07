import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './pages/Home/Home.js';
import CivilizationPage from './components/civilization/CivilizationPage';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route> 
          <Route path="/civilization/:id">
            <CivilizationPage/>
          </Route> 
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
