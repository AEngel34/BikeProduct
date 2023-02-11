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
            <div className="container" id="smooth-content">   *

                                      
            </div>   
        </div>  

        <Canvas shadows camera={{position : [1.4,2.375,-3.493]}}>


            {/* <BakeShadows/> */}

            <Bike orbitC={orbitC}/>

            <directionalLight castShadow position={[0,5,5]} intensity={.8} shadow-mapSize={[1024,1024]}/>

            <ambientLight intensity={1}/>
 
            <Environment files='./envMap/chinese_garden_1k.hdr' />


            <EffectComposer multisampling={10}>
                <Bloom luminanceThreshold={1} mipmapBlur intensity={0.8}/>
            </EffectComposer>

            <OrbitControls ref={orbitC}/>

        {/* <Perf/> */}
        </Canvas>
        {/* <div className='testDiv'>
            <div>
                <span>
                made with
                </span>
                <span>
                environmentally
                </span>
                <span>
                friendly materials 
                </span>
            </div>
            <div>
                the lightness of carbon offers you an unprecedented driving comfort
             
            </div>
           
        </div>  */}
    </>
       
    )
}