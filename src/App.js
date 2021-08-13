import Home from './Pages/Home';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import 'animate.css/animate.css'

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/uab/" component={Home}/>
          <Route exact path="/uab/about" component={About}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
