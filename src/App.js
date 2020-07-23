//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [lionScore, setLions] = useState(0);
  const [tigerScore, setTigers] = useState(0);
  const [lionTouchdown, lionSetCount] = useState(0);

  const [lionFieldGoal, lionFieldCount] = useState(0);
  const [tigerTouchdown, tigerSetCount] = useState(0);
  const [tigerFieldGoal, tigerFieldCount] = useState(0);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{lionScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigerScore}</div>
          </div>
        </div>
        <BottomRow lionDown={lionTouchdown} lionGoal={lionFieldGoal} tigerDown={tigerTouchdown} tigerGoal={tigerFieldGoal}/>
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => setLions( lionScore + 7 )}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => setLions( lionScore + 3 )}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setTigers( tigerScore + 7 )}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => setTigers( tigerScore + 3 )}>Away Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => tigerFieldCount( tigerFieldGoal >= 3 ? tigerFieldGoal * 0 : tigerFieldGoal + 1)}>Add Quarter</button>
          <button className="awayButtons__fieldGoal" onClick={() => setTigers( tigerScore + 3 )}>Other Button</button>
        </div>
      </section>
    </div>
  );
}

export default App;
