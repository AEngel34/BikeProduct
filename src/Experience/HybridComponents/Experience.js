import { useRef } from 'react'
import { Environment, OrbitControls, Preload } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import Bike from "./Bike.js"
import Loader from './Loader.js'
import '../../styles/experience.css'

export default function Experience(){

    const orbitC = useRef()

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
 
            <Environment files='./envMap/brown_photostudio_02_1k.hdr' />

            <EffectComposer >
                <Bloom luminanceThreshold={1} mipmapBlur intensity={0.8}/>
            </EffectComposer>

            <OrbitControls ref={orbitC} 
            enableRotate={false} enableZoom={false} enablePan={false}
            />
        
            <Preload all/>
        </Canvas>

        <Loader/>

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