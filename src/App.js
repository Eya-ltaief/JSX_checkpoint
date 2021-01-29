// importing image from src
import sandraoh from './sandraoh.jpg';
//importing style file
import './style.css';
// importing the video
import trailer from "./videos/trailer.mp4";
function App() {
  return (
    <div className="App">
      <div
        style={{
          border: "solid 3px black",
          borderRadius: "15px",
          maxWidth: "100vw"
        }}
      >
        <h1 className={"title red"}> Killing Eve serie </h1>
        <hr />
        <h2>Storyline</h2>
        <p>
          Eve is a bored, whip-smart security services operative whose
          desk-bound job doesn't fulfill her fantasies of being a spy.
          Villanelle is a talented killer, who clings to the luxuries her
          violent job affords her. These two fierce women, equally obsessed with
          each other, will go head to head in an epic game of cat and mouse,
          toppling the typical spy-action thriller.
        </p>
        <br />
        <h2>Main Actresses</h2>
        <img src={sandraoh} alt="sandra oh"></img>
        <h3>Sandra Oh</h3>
        <img src="/images/jodie.jpg" style={{height: "350px"}} alt="Jodie Comer"></img>
        <h3>Jodie Comer</h3>
        <h2>Trailer</h2>
        <p className="trailer">Don't miss it out !</p>
        <video src={trailer} width="450" controls="controls" autoPlay={true} />
      </div>
    </div>
  );
}

export default App;
