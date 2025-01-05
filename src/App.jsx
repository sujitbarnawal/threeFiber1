/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <div id="canvas-container">
      {/* <Canvas>
        <mesh>
          <sphereGeometry args={[2, 80, 80]} />
          <meshBasicMaterial wireframe color={"blue"} />
        </mesh>
      </Canvas> */}
      <Canvas camera={{position:[2,2,2]}}>
        <mesh>
          <boxGeometry args={[2,3,2]} />
          <meshPhongMaterial color={0x00bfff}/>
          <directionalLight position={[2,5,1]}/>
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
