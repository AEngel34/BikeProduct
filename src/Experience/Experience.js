import { useRef } from 'react'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import {BakeShadows, Environment, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Perf } from "r3f-perf"
import Bike from "./Bike.js"
import '../style.css'

export default function Experience(){
    
const orbitC= useRef()

window.addEventListener('click',()=>{
    console.log(orbitC.current)
})
    return(
    <>
        <div id="smooth-wrapper">
            <div className="container" id="smooth-content">                          
            </div>   
        </div>  

        <Canvas shadows camera={{position : [-0.1727,2.733,-3.245]}}>
      

            {/* <BakeShadows/> */}

            <Bike orbitC={orbitC}/>

            <directionalLight castShadow position={[0,5,5]} intensity={.8} shadow-mapSize={[1024,1024]}/>

            <ambientLight intensity={1}/>
 
            <Environment files='./envMap/chinese_garden_1k.hdr' />


            <EffectComposer multisampling={10}>
                <Bloom luminanceThreshold={1} mipmapBlur intensity={0.8}/>
            </EffectComposer>

            <OrbitControls ref={orbitC}/>

        <Perf/>
        </Canvas>
        
    </>
       
    )
}