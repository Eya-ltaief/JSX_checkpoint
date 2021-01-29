import sandraoh from './sandraoh.jpg';
import './App.css';
import './style.css';
import trailer from "./videos/trailer.mp4";
function App() {
  return (
    <div className="App">
        <div style={{border:"solid 1px black",borderRadius:"5%",maxWidth:"80vw"}}>
          <h1 className ={"title red"}>Killing Eve serie </h1>
          <br />
          <h2 style={{marginRight:"55%"}}>Cast :</h2>
          <img src={sandraoh} className="sandra"></img>
          <h2>Sandra Oh</h2>
          <img src="/jodiecomer.jpg"className="jodie" style={{height:"450px"}} ></img>
          <h2>Jodie Comer</h2>
        </div>
        <div style={{border:"solid 1px black",borderRadius:"5%",maxWidth:"80vw"}}>
          <h2 >Storyline</h2>
          <p className="story">Eve is a bored, whip-smart security services operative whose desk-bound job doesn't fulfill her fantasies of being a spy. Villanelle is a talented killer, who clings to the luxuries her violent job affords her. These two fierce women, equally obsessed with each other, will go head to head in an epic game of cat and mouse, toppling the typical spy-action thriller.</p>
          <hr />
          <h2>Trailer</h2>
          <video src={trailer} width="650" height="550" controls="controls"  />
        </div>
    </div>
  );
}

export default App;
