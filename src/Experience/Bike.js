import { useRef,useEffect} from "react";
import { useGLTF, useTexture} from "@react-three/drei";
import { MeshStandardMaterial,DoubleSide,Color ,sRGBEncoding} from 'three'
import ScreenRatio from "./ScreenRatio";

const baseMaterial = new MeshStandardMaterial({
  color : 0x020202, emissiveIntensity : 0,
  roughness : 0.2, metalness : 0.2,envMapIntensity :3, side : DoubleSide
})

const blackMetalMaterial = new MeshStandardMaterial({
  color : 0x101010, emissiveIntensity : 0,
  roughness : 0, metalness : .8 , envMapIntensity : 3
})

const plasticBlackMaterial = new MeshStandardMaterial({
  color : 0x000000, metalness : 0, emissiveIntensity : 0, envMapIntensity : 3,
  roughness : 1
})
const colorMaterial = new MeshStandardMaterial({color : new Color(0,1,1.5) , toneMapped: false})
const redMaterial = new MeshStandardMaterial({color : new Color(3,0,0), toneMapped: false})
const greenMaterial = new MeshStandardMaterial({color : new Color(0,1.5,0), toneMapped : false})
const aluMaterial = new MeshStandardMaterial({color : 0xaaaaaa, roughness : 0.1,metalness : 1,envMapIntensity:3})
const lightMaterial = new MeshStandardMaterial({color : new Color(0,0,0), emissiveIntensity : 0, toneMapped : false})

export default function Bike({orbitC}) {

  const { nodes, materials } = useGLTF("models/bike.glb");

  const batteryGroup = useRef(),
  backBike = useRef(),
  frontBlackSuspension = useRef(),
  pedals = useRef(),
  storageClosure = useRef(),
  crutch = useRef(),
  fullBike = useRef(),
  wheel = useRef(), wheelColor = useRef()
  
  const tabletTexture = useTexture('./textures/tablet.jpg')
  tabletTexture.flipY = false
  tabletTexture.encoding = sRGBEncoding

  useEffect(() => {
    fullBike.current.children.map((child)=>{
      if(child.type === 'Mesh'){
        child.updateMatrix()
      }
      else{
        child.children.map((child)=>{
          child.updateMatrix()
        })
      }
    })
  }, []);

  return (
    <>


    
    <group ref={fullBike}>

      <mesh position={[-1.03047,2.28241,0.138371]}
        geometry={nodes.screenTablet.geometry} matrixAutoUpdate = {false}>
          <meshBasicMaterial map={tabletTexture}/>
      </mesh>
      <mesh
        matrixAutoUpdate = {false}
        geometry={nodes.colorFixed.geometry}
        material={colorMaterial}
      />
      <mesh
        ref={crutch} castShadow
        geometry={nodes.crutch.geometry}
        material={baseMaterial}
        position={[0.17643431, 0.76114517, 0.1281587]}
      />
      <mesh
        name="backLight" matrixAutoUpdate = {false}
        geometry={nodes.backLight.geometry}
        material={redMaterial}
        position={[0.91527,1.88924,0.128159]}
      />
      <mesh
          ref={storageClosure}
          geometry={nodes.storageClosure.geometry}
          material={baseMaterial}
          position={[-0.322391,1.57526,0.121987]}
          rotation={[0, 0, -0.42552]}
      />
      <mesh
        castShadow matrixAutoUpdate = {false}
        geometry={nodes.baseFixed.geometry}
        material={baseMaterial}
      />
      <mesh matrixAutoUpdate = {false}
          castShadow
          geometry={nodes.blackMetalFixed.geometry}
          material={blackMetalMaterial} rotation-z={-0.2364136}
      />
      <mesh matrixAutoUpdate = {false}
          castShadow
          geometry={nodes.blackPlasticFixed.geometry}
          material={plasticBlackMaterial} rotation-z={-0.2364136}
      />

      <group ref={batteryGroup} position={[-0.318405,2.02922,0.128158]} rotation={[0, 0, -0.07614417]}>
        <mesh
            name="battery"
            geometry={nodes.battery.geometry}
            material={baseMaterial}
          />
          <mesh
            name="lightning"
            geometry={nodes.lightning.geometry}
            material={greenMaterial}
          />
          <mesh
            name="padlock"
            geometry={nodes.padlock.geometry}
            material={greenMaterial}
          />              
      </group>  

      <group ref={backBike}  position={[-0.130435,0.949257,-0.168723]}>
        <mesh

          geometry={nodes.derailerColor.geometry}
          material={colorMaterial}
        />
        <mesh castShadow
          geometry={nodes.derailer.geometry}
          material={baseMaterial}
        />
        <mesh
          ref={wheelColor}
          geometry={nodes.wheelColor.geometry} material={colorMaterial}
          position={[1.7138,0.0025,0.167584]}
        />
        <mesh
          ref={wheel} castShadow
          geometry={nodes.wheel.geometry} material={baseMaterial}
          position={[1.7138,0.0025,0.167584]}
        />
        <mesh
          geometry={nodes.brakeDisc.geometry}
          material={blackMetalMaterial}
        />
        <mesh
          castShadow
          geometry={nodes.backMetalAlu.geometry}
          material={aluMaterial}
        />
      </group>
      
      <group position={[-1.50931,2.01185,0.12816]}>

        <mesh
          ref={frontBlackSuspension}
          geometry={nodes.frontBlackSuspension.geometry}
          material={plasticBlackMaterial}
          rotation={[0, 0, -0.3125]}
          position={[-0.078 ,-0.26305 ,-0.014635]}  
        />

        <mesh
          name="lighthouse" matrixAutoUpdate = {false}
          geometry={nodes.lighthouse.geometry}
          material={lightMaterial}
        /> 
        <mesh
          name="glassLighthouse" matrixAutoUpdate = {false}
          geometry={nodes.glassLighthouse.geometry}
          material={nodes.lighthouse.material}
        > 
          <meshStandardMaterial color='white' roughness={1} transparent opacity={0.2} emissiveIntensity={0}/>
        </mesh>

        <mesh
          castShadow matrixAutoUpdate = {false}
          geometry={nodes.frontMetalAlu.geometry}
          material={aluMaterial}
        />

      </group>

      <group ref={pedals} position={[-0.130368,0.948792,0.128868]}>
      <mesh
        name="pedal1" castShadow
        geometry={nodes.pedal1.geometry} material={aluMaterial}
        position={[0.001, 0.5157,-0.433255]}
      >
      </mesh>
      <mesh
        name="pedal2" castShadow
        geometry={nodes.pedal2.geometry} material={aluMaterial}
        position={[0.001, -0.5157,0.433255]}
      />
      <mesh 
        name="pedals" castShadow
        geometry={nodes.pedals.geometry}
        material={blackMetalMaterial}
      />
      </group>        
      
    </group>   
   
      <mesh matrixAutoUpdate = {false}
        geometry={nodes.cubeEnvironment.geometry}
        receiveShadow
      >
        <meshStandardMaterial roughness={1} color="#000000" />
      </mesh>

      <ScreenRatio
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
        lightMaterial = {lightMaterial}
        greenMaterial ={greenMaterial}
      />
    </>
  );
}

useGLTF.preload("models/bike.glb");