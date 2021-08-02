import Cover from './Components/Cover';
import './App.css';
import 'animate.css/animate.css'  // you need to require the css somewhere
// import $ from 'jquery';
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

  // useEffect(() => {
  //   window
  //   .addEventListener('scroll', ({path})=> {
  //       const Window = path[1].scrollY;
  //       if(($('.animate')[5].getBoundingClientRect().top - $(Window).height()) <= -10) {
  //         // console.log('animation')
  //         $('.animate')[5].style.display = "block";
  //       }
  //   });
  // }, [])
  return (
    <div className="App">
      <Cover />
      
      <h2 id="element">------</h2>
      <Text />
      <h2>------</h2>
      <h2 className="animate">lorem</h2>
      <h2 className="animate">lorem</h2>
      <h2 className="animate">lorem</h2>
      <h2 className="animate">lorem</h2>
      <h2 className="animate">lorem</h2>
      <h2>lorem</h2>
      <h2>lorem</h2>
      <h2>lorem</h2>
      <h2>lorem</h2>
      <Fade colapse right duration={3000}>
          <h1>React Reveal</h1>
        </Fade>
      <h2>lorem</h2>
      <h2>lorem</h2>
      <h2>lorem</h2>
      <h2>lorem</h2>
      <h2>lorem</h2>
      <h2>lorem</h2>
      <h2>lorem</h2>
      <h2>lorem</h2>
      {/* <Cover /> */}
    </div>
  );
}

export default App;
