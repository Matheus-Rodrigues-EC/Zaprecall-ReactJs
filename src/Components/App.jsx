// import Welcome from "./Components/Welcome";
import Screen from "./Screen";
import Questions from "./Questions";
import { useState } from 'react';

function App() {

  const [turn, setTurn] = useState(["teste"]);
  const [verify, setVerify] = useState(["teste"]);
  const [sequence, setSequence] = useState([]);

  return (
    <div className="App">
      {/* <Welcome/> */}
      <Screen turn={turn} 
              setTurn={setTurn} 
              verify={verify}
              setVerify={setVerify}
              sequence={sequence}
              setSequence={setSequence}
              >
        <Questions />
      </Screen>
    </div>
  );
}

export default App;