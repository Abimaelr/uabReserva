import Home from './Pages/Home';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import 'animate.css/animate.css'
import audio from './assets/audio.mp3'

function App() {

  return (
    <div className="App">
      <Router>
        {/* <audio src={audio} autoPlay loop/> */}
        <Switch>
          <Route exact path="/uab/" component={Home}/>
          <Route exact path="/uab/about" component={About}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
