import { Environment, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import '../style.css'
import Bike from "./Bike.js"


export default function Experience(){

    return(
        <Canvas>
            
            <Bike/>
            {/* <color args={[1,1,1]} attach='background'/> */}
            {/* <ambientLight color={0xffffff} intensity={6}/> */}
            <Environment files='./envMap/dresden_square_1k.hdr' background/>
        <OrbitControls/>
        </Canvas>
    )
}