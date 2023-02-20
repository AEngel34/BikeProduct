import { useRef,useEffect,useState } from "react";
import { useGLTF,useTexture } from "@react-three/drei";
import { sRGBEncoding } from 'three'
import ScrollDesktop from "../DesktopComponents/ScrollDesktop.js";
import ScrollMobile from '../MobileComponents/ScrollMobile.js'
import { 
  baseMaterial,blackMetalMaterial,plasticBlackMaterial,colorMaterial,
  redMaterial,greenMaterial,aluMaterial,lightMaterial 
} from "./Materials.js";

export default function Bike({orbitC}) {

  const [aspectRatio, setAspectRatio] = useState(window.innerHeight / window.innerWidth)   
  const [deviceComponent, setDeviceComponent] = useState()
  
  useEffect(()=>{
    if(aspectRatio <= 0.75 && deviceComponent !=='desktop'){
      setDeviceComponent('desktop')
    }     
    else if(aspectRatio > 0.75 && deviceComponent!=='mobile'){
      setDeviceComponent('mobile')
    }

    updateFov(aspectRatio)

  },[aspectRatio])

  useEffect(()=>{

    updateAllMatrix() 

    const handleResize = ()=>{ setAspectRatio(window.innerHeight / window.innerWidth) }         
      
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  },[])

  
  const { nodes } = useGLTF("models/bike.glb");

  const batteryGroup = useRef(),backBike = useRef(),  
  frontBlackSuspension = useRef(),pedals = useRef(),  
  storageClosure = useRef(),crutch = useRef(), 
  fullBike = useRef(),wheel = useRef(),
  wheelColor = useRef()
  
  const tabletTexture = useTexture('./textures/tablet.jpg')
  tabletTexture.flipY = false
  tabletTexture.encoding = sRGBEncoding

  const updateAllMatrix = ()=>{
    fullBike.current.children.map((child)=>{
      if(child.type === 'Mesh') child.updateMatrix()      
      else child.children.map((child)=> child.updateMatrix())
      }
    )
  }

  const updateFov = (ratio)=>{
    if(ratio >= 0.5 && ratio <= 0.6){
      orbitC.current.object.fov = 90
    }
    else if(ratio > 0.6 &&  ratio <= 0.75){
      orbitC.current.object.fov = 100
    }
    else{
      orbitC.current.object.fov = 75   
    }
    orbitC.current.object.updateProjectionMatrix()
  }

  return (
    <>    
      <group ref={fullBike}>

        <mesh position={[-1.03047,2.28241,0.138371]}
          geometry={nodes.screenTablet.geometry} matrixAutoUpdate = {false}>
          <meshBasicMaterial map={tabletTexture}/>
        </mesh>
        <mesh matrixAutoUpdate = {false}         
          geometry={nodes.colorFixed.geometry} material={colorMaterial}         
        />
        <mesh ref={crutch} castShadow         
          geometry={nodes.crutch.geometry} material={baseMaterial}         
          position={[0.17643431, 0.76114517, 0.1281587]}
        />
        <mesh matrixAutoUpdate = {false}         
          geometry={nodes.backLight.geometry} material={redMaterial}         
          position={[0.91527,1.88924,0.128159]}
        />
        <mesh ref={storageClosure}           
          geometry={nodes.storageClosure.geometry} material={baseMaterial}           
          position={[-0.322391,1.57526,0.121987]} rotation={[0,0,-0.42552]}           
        />
        <mesh castShadow matrixAutoUpdate = {false}         
          geometry={nodes.baseFixed.geometry} material={baseMaterial}         
        />
        <mesh castShadow matrixAutoUpdate = {false}           
          geometry={nodes.blackMetalFixed.geometry} material={blackMetalMaterial}
          rotation-z={-0.2364136}
        />
        <mesh castShadow matrixAutoUpdate = {false}           
          geometry={nodes.blackPlasticFixed.geometry} material={plasticBlackMaterial} 
          rotation-z={-0.2364136}
        />

        <group ref={batteryGroup} 
          position={[-0.318405,2.02922,0.128158]} rotation={[0,0,-0.07614417]}
        >
          <mesh geometry={nodes.battery.geometry} material={baseMaterial}/>          
          <mesh geometry={nodes.lightning.geometry} material={greenMaterial}/>
          <mesh geometry={nodes.padlock.geometry} material={greenMaterial}/>
        </group>          
          
        <group ref={backBike} position={[-0.130435,0.949257,-0.168723]}>        
          <mesh geometry={nodes.derailerColor.geometry} material={colorMaterial}/>
          <mesh castShadow geometry={nodes.derailer.geometry} material={baseMaterial}/>
          <mesh geometry={nodes.brakeDisc.geometry} material={blackMetalMaterial}/>          
          <mesh castShadow geometry={nodes.backMetalAlu.geometry} material={aluMaterial}/>
          <mesh ref={wheelColor}           
            geometry={nodes.wheelColor.geometry} material={colorMaterial}
            position={[1.7138,0.0025,0.167584]}
          />
          <mesh ref={wheel} castShadow           
            geometry={nodes.wheel.geometry} material={baseMaterial}
            position={[1.7138,0.0025,0.167584]}
          />
        </group>
                   
        <group position={[-1.50931,2.01185,0.12816]}>
          <mesh ref={frontBlackSuspension}           
            geometry={nodes.frontBlackSuspension.geometry} material={plasticBlackMaterial}
            position={[-0.078 ,-0.26305 ,-0.014635]} rotation={[0, 0, -0.3125]}  
          />
          <mesh matrixAutoUpdate ={false} geometry={nodes.lighthouse.geometry} material={lightMaterial}/>
          <mesh matrixAutoUpdate ={false} geometry={nodes.glassLighthouse.geometry} material={nodes.lighthouse.material}>          
            <meshStandardMaterial color='white' roughness={1} transparent opacity={0.2} emissiveIntensity={0}/>
          </mesh>
          <mesh castShadow matrixAutoUpdate = {false} geometry={nodes.frontMetalAlu.geometry} material={aluMaterial}/>
        </group> 
           
        <group ref={pedals} position={[-0.130368,0.948792,0.128868]}>
          <mesh castShadow geometry={nodes.pedal1.geometry} material={aluMaterial}        
            position={[0.001, 0.5157,-0.433255]}
          />      
          <mesh castShadow geometry={nodes.pedal2.geometry} material={aluMaterial}          
            position={[0.001, -0.5157,0.433255]}
          />
          <mesh castShadow geometry={nodes.pedals.geometry} material={blackMetalMaterial}/>
        </group>        
        
      </group>   
    
      <mesh matrixAutoUpdate={false} receiveShadow
        geometry={nodes.cubeEnvironment.geometry}       
      >
        <meshStandardMaterial roughness={1} color="#000000" />
      </mesh>

      {deviceComponent === 'desktop' ? 
        <ScrollDesktop
            orbitC={orbitC}
            fullBike={fullBike}
            pedals={pedals}
            storageClosure = {storageClosure}
            battery = {batteryGroup}
            backBike = {backBike}
            crutch= {crutch}
            wheel={wheel}
            wheelColor = {wheelColor}
            suspension = {frontBlackSuspension}
        /> :  
        <ScrollMobile
          orbitC={orbitC}
          fullBike={fullBike}
          pedals={pedals}
          storageClosure = {storageClosure}
          battery = {batteryGroup}
          backBike = {backBike}
          crutch= {crutch}
          wheel={wheel}
          wheelColor = {wheelColor}
          suspension = {frontBlackSuspension}
        />
      }      
    </>
  )
}

useGLTF.preload("models/bike.glb");