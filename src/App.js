import logo from './logo.svg';
import './App.css';
import HomeScreen from "./components/HomeScreen"
import HeaderNav from "./components/HeaderNav"
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <HeaderNav />
        <Switch>
          <Route path="/" exact component={HomeScreen}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
