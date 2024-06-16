import { GizmoHelper, GizmoViewport, Grid, OrbitControls } from "@react-three/drei"
import { Canvas} from "@react-three/fiber"


function App() {

	return (
		<>
			<Canvas>
				<OrbitControls/>
				<Grid position={[0, -0.01, 0]}/>
				<mesh>
					<boxGeometry/>
					<meshBasicMaterial color={'orangered'}/>
				</mesh>
				<mesh position={[0,-0.5,0]} rotation={[-Math.PI/2, 0, 0]}>
					<planeGeometry args={[100, 100]} />
					<meshBasicMaterial color={'rebeccapurple'}/>
				</mesh>

				<GizmoHelper alignment="bottom-right" margin={[80, 80]}>
					<GizmoViewport axisColors={['red', 'green', 'blue']} labelColor="white" />
				</GizmoHelper>
			</Canvas>
		</>
	)
}

export default App
