import Cover from './Components/Cover';
import Body from './Components/Body';
import './App.css';
import 'animate.css/animate.css'
import Fade from 'react-reveal/Fade';


const Text = () => <div>
  <h2>lorem</h2>
  <h2>lorem</h2>
  <h2>lorem</h2>
  <h2>lorem</h2>
  <h2>lorem</h2>
  <h2>lorem</h2>
  <h2>lorem</h2>
  <h2>lorem</h2>
  <h2>lorem</h2>
</div>


function App() {

  return (
    <div className="App">
      <Cover />
      <div id="content">
        <Body />
      </div>
    </div>
  );
}

export default App;
