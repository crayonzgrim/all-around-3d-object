import React from "react";
import ThreeScene from "./components/ThreeScene";

function App() {
  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <ThreeScene>
        <color attach="background" args={['#161c24']}/>
      </ThreeScene>
    </div>
  );
}

export default App;
