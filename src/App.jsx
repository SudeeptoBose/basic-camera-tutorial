import { Canvas, useFrame} from "@react-three/fiber"
import { easing } from 'maath'
import { Model } from "./Model"
import Footer from "./Footer"

function Scene()  {
	
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

function App()	{
	return (
		<>
			<Canvas>
				<Scene/>
			</Canvas>
			<Footer/>
		</>
	)
}

export default App
