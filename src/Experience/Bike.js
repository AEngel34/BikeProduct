import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from 'three'
import gsap from 'gsap'

const baseMaterial = new THREE.MeshStandardMaterial({
  color : 0x000000 , emissiveIntensity : 0,
  roughness : 0, metalness : 1.5,envMapIntensity :3, side : THREE.DoubleSide
})
const colorMaterial = new THREE.MeshStandardMaterial({color : 0x0000ff})
const redMaterial = new THREE.MeshStandardMaterial({color : 0xff0000})
const greenMaterial = new THREE.MeshStandardMaterial({color : 0x00ff00})

export default function Bike() {
  const { nodes, materials } = useGLTF("models/bike.glb");

  const batteryGroup = useRef(),
  saddle = useRef(),
  backBike = useRef(),
  frontBike = useRef(),
  gourd = useRef(),
  pedals = useRef(),
  tablet = useRef()

  return (
    <group>
      <mesh
        name="frameColor"
        geometry={nodes.frameColor.geometry}
        material={colorMaterial}
        position={[-0.28336084, 1.67869413, 0.12886676]}
      />
      <mesh
        name="crutch"
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
          name="storageClosure"
          geometry={nodes.storageClosure.geometry}
          material={baseMaterial}
          position={[-0.322391,1.57526,0.121987]}
          rotation={[0, 0, -0.42552]}
      />
      <mesh
        name="frame"
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
            scale={1.03687048}
          />
          <mesh
            name="padlock"
            geometry={nodes.padlock.geometry}
            material={greenMaterial}
            scale={1.03687048}
          />              
          <mesh
            name="padlockClosure"
            geometry={nodes.padlockClosure.geometry}
            material={baseMaterial}
          />
      </group>

      <group ref={saddle} rotation={[0, 0, -0.23641357]} position={[0.752155,2.17691,0.128157]}>
        <mesh
          name="saddleTube"
          geometry={nodes.saddleTube.geometry}
          material={baseMaterial}
        />
        <mesh
          name="saddle"
          geometry={nodes.saddle.geometry}
          material={nodes.saddle.material}
        />
      </group>     

      <group ref={backBike}  position={[-0.130435,0.949257,-0.168723]}>
        <mesh
          name="backwardSuspension"
          geometry={nodes.backwardSuspension.geometry}
          material={nodes.backwardSuspension.material}
        />
        <mesh
          name='backwardBlackSuspension'
          geometry={nodes.backwardBlackSuspension.geometry}
          material={redMaterial} rotation={[0, 0, -1.610129]}
        />
        <mesh
          name="derailerColor"
          geometry={nodes.derailerColor.geometry}
          material={colorMaterial}
        />
        <mesh
          name="derailer"
          geometry={nodes.derailer.geometry}
          material={baseMaterial}
        />
        <mesh
          name="wheelColor"
          geometry={nodes.wheelColor.geometry}
          material={colorMaterial}
        />
        <mesh
          name="wheel"
          geometry={nodes.wheel.geometry}
          material={baseMaterial}
        />
        <mesh
          name="backwardBrakeCable"
          geometry={nodes.backwardBrakeCable.geometry}
          material={nodes.backwardBrakeCable.material}
        />
        <mesh
          name="brakeDisc"
          geometry={nodes.brakeDisc.geometry}
          material={baseMaterial}
        />
        <mesh
          name="disc"
          geometry={nodes.disc.geometry}
          material={nodes.disc.material}
        />
      </group>
      
      <group ref={frontBike} position={[-1.50931,2.01185,0.12816]}>
        <mesh
          name="handlebar"
          geometry={nodes.handlebar.geometry}
          material={baseMaterial}
        />
        <mesh
          name="frontSuspension"
          geometry={nodes.frontSuspension.geometry}
          material={nodes.frontSuspension.material}
        />
        <mesh
          name="frontBlackSuspension"
          geometry={nodes.frontBlackSuspension.geometry}
          material={baseMaterial}
          rotation={[0, 0, -0.3125]}
        />
        <mesh
          name="lighthouse"
          geometry={nodes.lighthouse.geometry}
          material={nodes.lighthouse.material}
        />
        <mesh
          name="brakeCable"
          geometry={nodes.brakeCable.geometry}
          material={nodes.brakeCable.material}
        />
        <mesh
          name="handleColor"
          geometry={nodes.handleColor.geometry}
          material={colorMaterial}
        />
        <mesh
          name="brakes"
          geometry={nodes.brakes.geometry}
          material={baseMaterial}
        />
        <mesh
          name="brakeDisc2"
          geometry={nodes.brakeDisc2.geometry}
          material={nodes.brakeDisc2.material}
        />
        <mesh
          name="wheel2color"
          geometry={nodes.wheel2color.geometry}
          material={colorMaterial}
        />
        <mesh
          name="disc2"
          geometry={nodes.disc2.geometry}
          material={nodes.disc2.material}
        />
        <mesh
          name="wheel2"
          geometry={nodes.wheel2.geometry}
          material={baseMaterial}
        />
        <mesh
          name="handleBlack"
          geometry={nodes.handleBlack.geometry}
          material={baseMaterial}
        />
      </group>

      <group ref={gourd} position={[0.241581,2.13089,0.128158]}>
      <mesh
        name="gourd"
        geometry={nodes.gourd.geometry}
        material={baseMaterial}
      />
      <mesh
        name="gourdColor"
        geometry={nodes.gourdColor.geometry}
        material={colorMaterial}
      />
      </group>

      <group ref={pedals} position={[-0.130368,0.948792,0.128868]}>
      <mesh
        name="pedal1"
        geometry={nodes.pedal1.geometry}
        material={nodes.pedal1.material}
      />
      <mesh
        name="pedal2"
        geometry={nodes.pedal2.geometry}
        material={nodes.pedal2.material}
      />
      <mesh
        name="pedals"
        geometry={nodes.pedals.geometry}
        material={baseMaterial}
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
          material={nodes.pathGPS.material}
        />
        <mesh
          name="structureTablet"
          geometry={nodes.structureTablet.geometry}
          material={nodes.structureTablet.material}
        />
        <mesh
          name="colorBatGPS"
          geometry={nodes.colorBatGPS.geometry}
          material={nodes.colorBatGPS.material}
        />
        <mesh
          name="colorScreenTablet"
          geometry={nodes.colorScreenTablet.geometry}
          material={nodes.colorScreenTablet.material}
        />
        <mesh
          name="screen"
          geometry={nodes.screen.geometry}
          material={nodes.screen.material}
        />
        <mesh
          name="cursorGPS"
          geometry={nodes.cursorGPS.geometry}
          material={redMaterial}
        />
        <mesh
          name="blackScreenTablet"
          geometry={nodes.blackScreenTablet.geometry}
          material={baseMaterial}
        />
        <mesh
          name="whiteScreenTablet"
          geometry={nodes.whiteScreenTablet.geometry}
          material={nodes.whiteScreenTablet.material}
        />
      </group>  
    </group>
  );
}

useGLTF.preload("models/bike.glb");