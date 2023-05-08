import React, { Suspense } from "react";
import ThreeScene from "./components/ThreeScene";
import Sphere from "./components/Sphere";
import {OrbitControls, Stars} from '@react-three/drei'
import Model from "./components/Model";

function App() {
  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <ThreeScene>
        <color attach="background" args={['#161c24']}/>
        <Sphere color="#00ff00" position={[-2, 0, 0]}/>
        <Sphere color="#ff0000"  position={[2, 0, 0]}/>
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <ambientLight />
        <OrbitControls autoRotate={true} />
        <Stars count={3000} />
      </ThreeScene>
    </div>
  );
}

export default App;
