import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { MeshStandardMaterial,DoubleSide,Color } from 'three'
import Scroll from "./Scroll";

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
const aluMaterial = new MeshStandardMaterial({color : 0xaaaaaa, roughness : 0,metalness : 1,envMapIntensity:3})

export default function Bike({orbitC}) {
  const { nodes, materials } = useGLTF("models/bike.glb");

  const batteryGroup = useRef(),
  saddle = useRef(),
  backBike = useRef(),
  frontBike = useRef(),
  gourd = useRef(),
  pedals = useRef(),
  tablet = useRef(),
  storageClosure = useRef(),
  crutch = useRef(),
  fullBike = useRef(),
  wheel = useRef(), wheelColor = useRef()
 
  return (
    <>
    <group ref={fullBike}>
      <mesh
        name="frameColor"
        geometry={nodes.frameColor.geometry}
        material={colorMaterial}
        position={[-0.28336084, 1.67869413, 0.12886676]}
      />
      <mesh
        ref={crutch} castShadow
        geometry={nodes.crutch.geometry}
        material={baseMaterial}
        position={[0.17643431, 0.76114517, 0.1281587]}
      />
      <mesh
        name="backLight"
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
        name="frame" castShadow
        geometry={nodes.frame.geometry}
        material={baseMaterial}
        position={[-0.150923,1.52323 ,0.165661]}
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

      <group ref={saddle} rotation={[0, 0, -0.23641357]} position={[0.752155,2.17691,0.128157]}>
        <mesh
          name="saddleTube" castShadow
          geometry={nodes.saddleTube.geometry}
          material={blackMetalMaterial}
        />
        <mesh
          name="saddle" castShadow
          geometry={nodes.saddle.geometry}
          material={plasticBlackMaterial}
        />
      </group>     

      <group ref={backBike}  position={[-0.130435,0.949257,-0.168723]}>
        <mesh
          name="backwardSuspension"
          geometry={nodes.backwardSuspension.geometry}
          material={aluMaterial}
        />
        <mesh
          name='backwardBlackSuspension'
          geometry={nodes.backwardBlackSuspension.geometry}
          material={plasticBlackMaterial} rotation={[0, 0, -1.610129]}
        />
        <mesh
          name="derailerColor"
          geometry={nodes.derailerColor.geometry}
          material={colorMaterial}
        />
        <mesh
          name="derailer" castShadow
          geometry={nodes.derailer.geometry}
          material={baseMaterial}
        />
        <mesh
          ref={wheelColor}
          geometry={nodes.wheelColor.geometry} material={colorMaterial}
          position={[1.7138,0.0025,0.167584]}
        />
        <mesh
          ref={wheel}castShadow
          geometry={nodes.wheel.geometry} material={baseMaterial}
          position={[1.7138,0.0025,0.167584]}
        />
        <mesh
          name="backwardBrakeCable"
          geometry={nodes.backwardBrakeCable.geometry}
          material={plasticBlackMaterial}
        />
        <mesh
          name="brakeDisc"
          geometry={nodes.brakeDisc.geometry}
          material={blackMetalMaterial}
        />
        <mesh
          name="disc" castShadow
          geometry={nodes.disc.geometry}
          material={aluMaterial}
        />
      </group>
      
      <group ref={frontBike} position={[-1.50931,2.01185,0.12816]}>
        <mesh
          name="handlebar" castShadow
          geometry={nodes.handlebar.geometry}
          material={baseMaterial}
        />
        <mesh
          name="frontSuspension"
          geometry={nodes.frontSuspension.geometry}
          material={aluMaterial}
        />
        <mesh
          name="frontBlackSuspension"
          geometry={nodes.frontBlackSuspension.geometry}
          material={plasticBlackMaterial}
          rotation={[0, 0, -0.3125]}
        />
        <mesh
          name="lighthouse"
          geometry={nodes.lighthouse.geometry}
          material={nodes.lighthouse.material}
        > 
          <meshStandardMaterial color={[35,35,35]} emissiveIntensity={0} toneMapped={false}/>
        </mesh>
        <mesh
          name="glassLighthouse"
          geometry={nodes.glassLighthouse.geometry}
          material={nodes.lighthouse.material}
        > 
          <meshStandardMaterial color='white' roughness={1} transparent opacity={0.2} emissiveIntensity={0}/>
        </mesh>
        <mesh
          name="brakeCable"
          geometry={nodes.brakeCable.geometry}
          material={plasticBlackMaterial}
        />
        <mesh
          name="handleColor"
          geometry={nodes.handleColor.geometry}
          material={colorMaterial}
        />
        <mesh
          name="brakes" castShadow
          geometry={nodes.brakes.geometry}
          material={blackMetalMaterial}
        />
        <mesh
          name="brakeDisc2" castShadow
          geometry={nodes.brakeDisc2.geometry}
          material={blackMetalMaterial}
        />
        <mesh
          name="wheel2color"
          geometry={nodes.wheel2color.geometry}
          material={colorMaterial}
        />
        <mesh
          name="disc2" castShadow
          geometry={nodes.disc2.geometry}
          material={aluMaterial}
        />
        <mesh
          name="wheel2" castShadow
          geometry={nodes.wheel2.geometry}
          material={baseMaterial}
        />
        <mesh
          name="handleBlack"
          geometry={nodes.handleBlack.geometry}
          material={plasticBlackMaterial}
        />
      </group>

      <group  ref={gourd} position={[0.241581,2.13089,0.128158]}>
      <mesh
        name="gourd" castShadow
        geometry={nodes.gourd.geometry}
        material={plasticBlackMaterial}
      />
      <mesh
        name="gourdColor"
        geometry={nodes.gourdColor.geometry}
      >
        <meshStandardMaterial color={[0,.4,.7]} roughness={1}/>
      </mesh>
      </group>

      <group ref={pedals} position={[-0.130368,0.948792,0.128868]}>
      <mesh
        name="pedal1" castShadow
        geometry={nodes.pedal1.geometry} material={aluMaterial}
        position={[0.001, 0.5157,-0.433255]}
      />
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
      <mesh
        name="pedalsColor"
        geometry={nodes.pedalsColor.geometry}
        material={colorMaterial}
      />
      </group>

      <group ref={tablet} position={[-1.03047,2.28241,0.138371]}>
        <mesh
          name="pathGPS"
          geometry={nodes.pathGPS.geometry}
        >
          <meshBasicMaterial color={[0,1,0]}/>
        </mesh>
        <mesh
          name="structureTablet" castShadow
          geometry={nodes.structureTablet.geometry}
          material={plasticBlackMaterial}
        />
        <mesh
          name="colorBatGPS"
          geometry={nodes.colorBatGPS.geometry}
        >
          <meshBasicMaterial color={[0,.1,.1]}/>
        </mesh>
        <mesh
          name="colorScreenTablet"
          geometry={nodes.colorScreenTablet.geometry}
        >
          <meshBasicMaterial color={[0,0.7,1.3]} toneMapped={false}/>
        </mesh>
        <mesh
          name="screen"
          geometry={nodes.screen.geometry}
        >
          <meshStandardMaterial color={[0,0,0]} roughness={0} metalness={1}/>
        </mesh>
        <mesh
          name="cursorGPS"
          geometry={nodes.cursorGPS.geometry}
        >
          <meshBasicMaterial color={[1,0,0]}/>
        </mesh>
        <mesh
          name="blackScreenTablet"
          geometry={nodes.blackScreenTablet.geometry}
          material={plasticBlackMaterial}
        />
        <mesh
          name="whiteScreenTablet"
          geometry={nodes.whiteScreenTablet.geometry}
        >
          <meshBasicMaterial color={[1,1,1]}/>
        </mesh>
      </group> 
    </group>
      <mesh
        geometry={nodes.cubeEnvironment.geometry}
        receiveShadow
      >
        <meshPhysicalMaterial roughness={1} color="#000000" />
      </mesh>


      <Scroll 
        orbitC={orbitC}
        fullBike={fullBike}
        pedals={pedals}
        storageClosure = {storageClosure}
        battery = {batteryGroup}
        backBike = {backBike}
        crutch= {crutch}
        wheel={wheel}
        wheelColor = {wheelColor}
      />
    </>
  );
}

useGLTF.preload("models/bike.glb");