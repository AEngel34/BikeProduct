import { Text } from "@react-three/drei";
import {MeshStandardMaterial, Color} from 'three'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
import { useEffect, useRef } from "react";
import { useControls } from "leva";

const titleMaterial = new MeshStandardMaterial({color : new Color(0,1,1.2), envMapIntensity : 5, metalness : 1, roughness : 0})
const title2Material = new MeshStandardMaterial({color : new Color(2,2,2), envMapIntensity : 5, metalness : 1, roughness : 0})
export default function Interface(){

    const sectionTitleText1 = useRef(),sectionTitleText2= useRef(),sectionTitleText3 = useRef()

    const section1Text1 = useRef(),section1Text2 = useRef(),section1Text3 = useRef(),section1Text4 = useRef(),section1Text5 = useRef()

    const section2Text1 = useRef(), section2Text2 = useRef()

    const {posX , posY ,posZ, rotX , rotY, rotZ} = useControls({
        posX : {value : 0.7, max : 1, min : 0},
        posY : {value : 1.6, max : 2, min : 1},
        posZ : {value : 0, max : 2 , min : -2},
        rotX : {value : Math.PI * 0.1 , max : Math.PI,min : -Math.PI},
        rotY : {value : Math.PI * 1 , max : Math.PI,min : -Math.PI},
        rotZ : {value : Math.PI * 0, max : Math.PI,min : -Math.PI},
    })

    useEffect(()=>{
        titleScrollTrigger()
        section1ScrollTrigger()
        section2ScrollTrigger()
    },[])


    const Montserrat =  './font/Montserrat-VariableFont_wght.ttf'
    const Pacifico = './font/Pacifico-Regular.ttf'
    const satifsy = './font/Satisfy-Regular.ttf'
    const cinzel = './font/Cinzel-VariableFont_wght.ttf'

    const titleScrollTrigger = ()=>{
        let tl = new gsap.timeline({
            scrollTrigger: {
                trigger: ".container",
                scrub: true,
                start: "0% top",
                end: "3% top",
            }
        })

        tl.to(sectionTitleText1.current,{fillOpacity : 0},0)
        tl.to(sectionTitleText2.current,{fillOpacity : 0},0)
        tl.to(sectionTitleText3.current,{fillOpacity : 0},0)

    }

    const section1ScrollTrigger = ()=>{
        let tl = new gsap.timeline({
            scrollTrigger: {
                trigger: ".container",
                scrub: true,
                start: "3% top",
                end: "18% top",
            }
        })

        tl.to(section1Text1.current,{fillOpacity : 1},0)
        tl.to(section1Text2.current,{fillOpacity : 1},0.3)
        tl.to(section1Text3.current,{fillOpacity : 1},0.6)
        tl.to(section1Text4.current,{fillOpacity : 1},1.1)
        tl.to(section1Text5.current,{fillOpacity : 1},1.6)
        tl.to(section1Text1.current,{fillOpacity : 0},1.9)
        tl.to(section1Text2.current,{fillOpacity : 0},1.9)
        tl.to(section1Text3.current,{fillOpacity : 0},1.9)
        tl.to(section1Text4.current,{fillOpacity : 0},1.9)
        tl.to(section1Text5.current,{fillOpacity : 0},1.9)
    }

    const section2ScrollTrigger = ()=>{
        let tl = new gsap.timeline({
            scrollTrigger: {
                trigger: ".container",
                scrub: true,
                start: "18% top",
                end: "25% top",
                markers : true
            }
        })

        tl.to(section2Text1.current,{fillOpacity : 1},0)
        tl.to(section2Text2.current,{fillOpacity : 1},0.5)
        tl.to(section2Text2.current,{fillOpacity : 0},1)
        tl.to(section2Text1.current,{fillOpacity : 0},1)
    }

   
    return(
        <>

        {/* TITLE SECTION */}
            <Text ref={sectionTitleText1}
                font= {cinzel}
                rotation={[Math.PI * 0.05,Math.PI,0]} 
                position={[1.4,3.1,0]}
                fontSize={0.65} 
                material = {title2Material}
                
            >
            you would never have 
            </Text>
            <Text ref={sectionTitleText2}
                font= {cinzel}
                rotation={[Math.PI * 0.05,Math.PI,0]} 
                position={[3,2.4,2]}
 
                fontSize={1.1}
                material = {titleMaterial}
            >
             wanted to move 
            </Text>
            <Text ref={sectionTitleText3}
                font= {cinzel}
                rotation={[Math.PI * 0.05,Math.PI,0]} 
                position={[3.2,1.8,-1]}
                maxWidth={5}
                fontSize={0.55}
                material = {title2Material}
            >
              so much
            </Text>



            {/* SECTION1 */}

            <Text ref={section1Text1}
                rotation={[0,Math.PI,0]} 
                fontSize={0.}
                position={[0.8,2.5,0]}
                maxWidth ={3}
                font= {cinzel}
                textAlign='center'
                fillOpacity={0}
                material = {title2Material}
            >
                Be assisted in your effort with its powerful engine
            </Text>

            <Text ref={section1Text2}
                rotation={[0.37,2.90,-0.11]} 
                fontSize={0.05}
                position={[0.42,1.5,-1.42]}
                maxWidth ={1}
                font= {cinzel}
                textAlign='center' 
                fillOpacity={0}
                material = {title2Material}
            >
                starting & pedaling assistance
            </Text>

            <Text ref={section1Text3}
                rotation={[0.61,2.66,-0.24]} 
                fontSize={0.035}
                position={[0.28,1.47,-1.04]}
                maxWidth ={0.6}
                font= {cinzel}
                textAlign='center'
                fillOpacity={0}
                material = {title2Material}
            >
                manage the different driving modes with your app
            </Text>

            <Text ref={section1Text4}
                rotation={[0,Math.PI,0]} 
                fontSize={0.04}
                position={[0.35,1.45,-0.01]}
                maxWidth ={0.41}
                font= {cinzel}
                textAlign='center'
                fillOpacity={0}
                material = {title2Material}
            >
               regenerative braking recharges the battery during descent or deceleration
            </Text>
            <Text ref={section1Text5}
                rotation={[-0.11, 3.14, 0]} 
                fontSize={0.05}
                position={[-0.5,1.33,0]}
                maxWidth ={0.5}
                font= {cinzel}
                textAlign='center'
                fillOpacity={0}
                material = {title2Material}
            >
                Keep a good grip with the non-slip pedals
            </Text>

            {/* SECTION2 */}

            <Text ref={section2Text1}
                rotation={[0, -Math.PI * 0.8, 0]} 
                fontSize={0.03}
                position={[-1.1,1.9,-0.1]}
                maxWidth ={0.4}
                font= {cinzel}
                textAlign='center'
                fillOpacity={0}
                material = {title2Material}
            >
                Made with environmentally friendly materials 
            </Text>

            <Text ref={section2Text2}
                rotation={[0, -Math.PI * 1, 0]} 
                fontSize={0.03}
                position={[-0.65,1.5,0.015]}
                maxWidth ={0.4}
                font= {cinzel}
                textAlign='center'
                fillOpacity={0}
                material = {title2Material}
            >
                the lightness of carbon offers you an unprecedented driving comfort
            </Text>

        </>
    )
}