import Home from './Pages/Home';
import About from './Pages/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import 'animate.css/animate.css'
import '../src/assets/css/general.css'
import Footer from './Components/Footer';
import Event from './Pages/Event';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/uab/" component={Home}/>
          <Route exact path="/uab/about" component={About}/>
          <Route exact path="/uab/event" component={Event}/>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
