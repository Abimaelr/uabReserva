import Home from './Pages/Home';
import About from './Components/About';
import ReactAudioPlayer from 'react-audio-player';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import 'animate.css/animate.css'
import '../src/assets/css/general.css'
import audio from './assets/audio.mp3'
import Footer from './Components/Footer';

function App() {

  return (
    <div className="App">
      <Router>
        <ReactAudioPlayer
          src={audio}
          autoPlay
          loop
          volume={0.5}
          // controls
        />
        <Switch>
          <Route exact path="/uab/" component={Home}/>
          <Route exact path="/uab/about" component={About}/>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
