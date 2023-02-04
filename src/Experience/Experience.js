import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import '../style.css'
import Bike from "./Bike"


export default function Experience(){

    return(
        <Canvas>
            <Bike/>
            
        <OrbitControls/>
        </Canvas>
    )
}