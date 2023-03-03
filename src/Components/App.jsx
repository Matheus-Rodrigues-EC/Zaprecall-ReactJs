import Welcome from "./Welcome";
import Screen from "./Screen";
import Questions from "./Questions";
import { useState } from 'react';

function App() {

  const [turn, setTurn] = useState(["teste"]);
  const [verify, setVerify] = useState(["teste"]);
  const [sequence, setSequence] = useState([]);
  const [showWelcome, setShowWelcome] = useState('block');
  const [showScreen, setShowScreen] = useState('none');

  return (
    <div className="App">
      <Welcome showWelcome={showWelcome} setShowWelcome={setShowWelcome} setShowScreen={setShowScreen} />
      <Screen turn={turn} 
              setTurn={setTurn}
              verify={verify}
              setVerify={setVerify}
              sequence={sequence}
              setSequence={setSequence}
              showScreen={showScreen}
              >
        <Questions />
      </Screen>
    </div>
  );
}

export default App;