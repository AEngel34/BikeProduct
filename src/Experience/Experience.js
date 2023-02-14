import { useRef } from 'react'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import {BakeShadows, Center, Environment, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Perf } from "r3f-perf"
import Bike from "./Bike.js"
import '../style.css'

export default function Experience(){

    const orbitC= useRef()

    return(
    <>
        <div id="smooth-wrapper">
            <div className="container" id="smooth-content"> 
            </div>   
        </div>  

        <Canvas shadows>

            <Bike orbitC={orbitC}/>
        
            <directionalLight castShadow position={[0,5,5]} intensity={.8} shadow-mapSize={[1024,1024]}/>

            <ambientLight intensity={1}/>
 
            <Environment files='./envMap/chinese_garden_1k.hdr' />


            <EffectComposer >
                <Bloom luminanceThreshold={1} mipmapBlur intensity={0.8}/>
            </EffectComposer>

            <OrbitControls ref={orbitC}
            enablePan={false} enableRotate={false}
            enableZoom={false} />
        
        <Perf/>
        </Canvas>

        <div className='fakeMenu'>
            <span></span>
            <span></span>
            <span></span>
        </div>

        <div className='scrollIndication'>            
            <span>SCROLL</span>
            <div></div>
        </div>

    </>
       
    )
}