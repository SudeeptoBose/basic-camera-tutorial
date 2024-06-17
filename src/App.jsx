import { GizmoHelper, GizmoViewport, OrbitControls } from "@react-three/drei"
import { Canvas, useFrame} from "@react-three/fiber"
import { easing } from 'maath'
import { Model } from "./Model"


function Scene(){
	const rotationFactor = 0.2
	
	useFrame((state, delta)=>{
		easing.dampE(state.camera.rotation, [state.pointer.y * rotationFactor, -state.pointer.x * rotationFactor, 0], 0.25, delta)
	})

	return(
		<>
			<Model position={[3.00,1.00,-2.00]} rotation={[0,-3.00,0]}/>
		</>
	)
}

function App() {
	return (
		<>
			<Canvas>
				<Scene/>
				<GizmoHelper alignment="bottom-right" margin={[80, 80]}>
					<GizmoViewport axisColors={['red', 'green', 'blue']} labelColor="white" />
				</GizmoHelper>
			</Canvas>
		</>
	)
}

export default App
