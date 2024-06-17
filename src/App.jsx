import { GizmoHelper, GizmoViewport, OrbitControls } from "@react-three/drei"
import { Canvas, useFrame} from "@react-three/fiber"
import { easing } from 'maath'

function Scene(){

	const rotationFactor = 0.2

	useFrame((state, delta)=>{
		easing.dampE(state.camera.rotation, [state.pointer.y * rotationFactor, -state.pointer.x * rotationFactor, 0], 0.25, delta)
	})

	return(
		<>
			<mesh>
				<boxGeometry/>
				<meshBasicMaterial color={'orangered'}/>
			</mesh>
			<mesh position={[0,-0.5,0]} rotation={[-Math.PI/2, 0, 0]}>
				<planeGeometry args={[100, 100]} />
				<meshBasicMaterial color={'rebeccapurple'}/>
			</mesh>
		</>
	)
}

function App() {

	return (
		<>
			<Canvas>
				{/* <OrbitControls/> */}

				<Scene/>

				<GizmoHelper alignment="bottom-right" margin={[80, 80]}>
					<GizmoViewport axisColors={['red', 'green', 'blue']} labelColor="white" />
				</GizmoHelper>
			</Canvas>
		</>
	)
}

export default App
