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

    const section2Text1 = useRef(), section2Text2 = useRef(),
    section2Text3 = useRef(),section2Text4 = useRef(),section2Text5 = useRef(),
    section2Text6 = useRef(),section2Text7 = useRef()

    const section3Text1 = useRef(),section3Text2 = useRef()

    const section4Text1 = useRef(), section4Text2 = useRef()

    const section5Text1 = useRef()

    const section6Text1 = useRef(),section6Text2 = useRef()

    const section7Text1 = useRef()

    const {posX , posY ,posZ, rotX , rotY, rotZ} = useControls({
        posX : {value : 0.7, max : 1, min : -3},
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
        section3ScrollTrigger()
        section4ScrollTrigger()
        section5ScrollTrigger()
        section7ScrollTrigger()
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

        tl.to(section1Text1.current,{fillOpacity : 1,duration : 1,ease:'none'},0)
        tl.to(section1Text2.current,{fillOpacity : 1,duration : 1,ease:'none'},0.3)
        tl.to(section1Text3.current,{fillOpacity : 1,duration : 1,ease:'none'},0.6)
        tl.to(section1Text4.current,{fillOpacity : 1,duration : 1,ease:'none'},1.1)
        tl.to(section1Text5.current,{fillOpacity : 1,duration : 1,ease:'none'},1.6)
        tl.to(section1Text1.current,{fillOpacity : 0,ease:'none'},2.3)
        tl.to(section1Text2.current,{fillOpacity : 0,ease:'none'},2.3)
        tl.to(section1Text3.current,{fillOpacity : 0,ease:'none'},2.3)
        tl.to(section1Text4.current,{fillOpacity : 0,ease:'none'},2.3)
        tl.to(section1Text5.current,{fillOpacity : 0,ease:'none'},2.3)
    }

    const section2ScrollTrigger = ()=>{
        let tl = new gsap.timeline({
            scrollTrigger: {
                trigger: ".container",
                scrub: true,
                start: "17% top",
                end: "23% top",
        
            }
        })

        tl.to(section2Text1.current,{fillOpacity : 1,ease:'none',duration : 2},1)
        tl.to(section2Text2.current,{fillOpacity : 1,ease:'none',duration : 2},1.5)
        tl.to(section2Text3.current,{fillOpacity : 1,ease:'none',duration : 2},2)
        tl.to(section2Text4.current,{fillOpacity : 1,ease:'none',duration : 2},2.5)
        tl.to(section2Text5.current,{fillOpacity : 1,ease:'none',duration : 2},3)
        tl.to(section2Text6.current,{fillOpacity : 1,ease:'none',duration : 2},3.5)
        tl.to(section2Text7.current,{fillOpacity : 1,ease:'none',duration : 2},4)
        tl.to(section2Text1.current.position,{z : -1.09,ease:'none',duration : 2},0.5)
        tl.to(section2Text2.current.position,{z : -1.095,ease:'none',duration : 2},1)
        tl.to(section2Text3.current.position,{z : -1.099,ease:'none',duration : 2},1.5)
        tl.to(section2Text4.current.position,{z : -1.1,ease:'none',duration : 2},2)
        tl.to(section2Text5.current.position,{z : -1.107,ease:'none',duration : 2},2.5)
        tl.to(section2Text6.current.position,{z : -1.107,ease:'none',duration : 2},3)
        tl.to(section2Text7.current.position,{z : -1.11,ease:'none',duration : 2},3.5)
        tl.to(section2Text1.current,{fillOpacity : 0,ease:'none',duration : 2},5)
        tl.to(section2Text2.current,{fillOpacity : 0,ease:'none',duration : 2},5)
        tl.to(section2Text3.current,{fillOpacity : 0,ease:'none',duration : 2},5)
        tl.to(section2Text4.current,{fillOpacity : 0,ease:'none',duration : 2},5)
        tl.to(section2Text5.current,{fillOpacity : 0,ease:'none',duration : 2},5)
        tl.to(section2Text6.current,{fillOpacity : 0,ease:'none',duration : 2},5)
        tl.to(section2Text7.current,{fillOpacity : 0,ease:'none',duration : 2},5)
    }

    const section3ScrollTrigger = ()=>{
        let tl = new gsap.timeline({
            scrollTrigger: {
                trigger: ".container",
                scrub: true,
                start: "26% top",
                end: "30% top",
            }
        })

        tl.to(section3Text1.current,{fillOpacity : 1,duration : 1.5,ease:'none'},0.5)
        tl.to(section3Text2.current,{fillOpacity : 1,duration : 1.5,ease:'none'},0.5)
        tl.to(section3Text1.current.position,{x : -0.15, z : 0.4,duration : 1.5,ease:'none'},0)
        tl.to(section3Text2.current.position,{x : -0.38, z : -0.15,duration : 1.5,ease:'none'},0)

        
        tl.to(section3Text1.current,{fillOpacity : 0,ease:'none'},1.5)
        tl.to(section3Text2.current,{fillOpacity : 0,ease:'none'},1.5)
    }

    const section4ScrollTrigger = ()=>{
        let tl = new gsap.timeline({
            scrollTrigger: {
                trigger: ".container",
                scrub: true,
                start: "37.5% top",
                end: "42.5% top",
            }
        })

        tl.to(section4Text1.current.position,{x : -0.25, y : 2.21,duration : 1,ease:'none'},0)
        tl.to(section4Text1.current.position,{x : -0.27, y : 2,duration : 1,ease:'none'},1)
        
        let tl2 = new gsap.timeline({
            scrollTrigger: {
                trigger: ".container",
                scrub: true,
                start: "42.5% top",
                end: "46.5% top"
            }
        })

        tl2.to(section4Text2.current,{fillOpacity : 1 ,ease:'none'},0)
        tl2.to(section4Text2.current,{fillOpacity : 0 ,ease:'none'},1)
        tl2.to(section4Text1.current,{fillOpacity : 0 ,ease:'none'},1)
    }

    const section5ScrollTrigger = ()=>{
        let tl = new gsap.timeline({
            scrollTrigger: {
                trigger: ".container",
                scrub: true,
                start: "55% top",
                end: "65% top",
            }
        })

       tl.to(section5Text1.current,{fillOpacity : 1,ease: 'none'},0)
       tl.to(section5Text1.current,{fillOpacity : 0,ease: 'none'},.5)

       tl.to(section6Text1.current,{fillOpacity : 1,ease: 'none'},2)
       tl.to(section6Text2.current,{fillOpacity : 1,ease: 'none'},2.5)
       tl.to(section6Text1.current,{fillOpacity : 0,ease: 'none'},3)
       tl.to(section6Text2.current,{fillOpacity : 0,ease: 'none'},3)
    }

    const section7ScrollTrigger= ()=>{
        let tl = new gsap.timeline({
            scrollTrigger: {
                trigger: ".container",
                scrub: true,
                start: "68.4% top",
                end: "71% top",
                markers : true
            }
        })

       tl.to(section7Text1.current,{fillOpacity : 1,ease: 'none'},0)
       tl.to(section7Text1.current._baseMaterial.color,{r : 2, g : 2 , b : 2, ease:'none'},0)
       tl.to(section7Text1.current,{fillOpacity : 0},2)   
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
                rotation={[0.5,2.90,-0.11]} 
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
                rotation={[0,-Math.PI * 0.5,0]} 
                fontSize={0.1}
                position={[0.1,2.03,-2.09]}
                maxWidth ={1}
                font= {cinzel}
                textAlign='center'
                fillOpacity={0}
                material = {title2Material}
            >
                made with
            </Text>
            <Text ref={section2Text2}
                 rotation={[0,-Math.PI * 0.5,0]}
                fontSize={0.06}
                position={[0.1,1.94,-2.095]}
                font= {cinzel}
                textAlign='center'
                fillOpacity={0}
                material = {title2Material}
            >
                
                 environmentally 
            </Text>
            <Text ref={section2Text3}
                    rotation={[0,-Math.PI * 0.5,0]}
                    fontSize={0.056}
                    position={[0.1,1.865,-2.099]}    
                    font= {cinzel}
                    textAlign='center'
                    fillOpacity={0}
                    material = {title2Material}
            >

                 friendly materials 
            </Text>

            <Text ref={section2Text4}
                rotation={[0,-Math.PI * 0.5,0]}
                fontSize={0.08}
                position={[0.1,1.7,-2.1]}
                font= {cinzel}
                textAlign='center'
                fillOpacity={0}
                material = {title2Material}
            >
                the lightness 
            </Text>
            <Text ref={section2Text5}
                rotation={[0,-Math.PI * 0.5,0]}
                fontSize={0.043}
                position={[0.1,1.62,-2.107]}
       
                font= {cinzel}
                textAlign='center'
                fillOpacity={0}
                material = {title2Material}
            >
                of carbon offers you an 
            </Text>
            <Text ref={section2Text6}
                rotation={[0,-Math.PI * 0.5,0]}
                fontSize={0.045}
                position={[0.1,1.55,-2.107]}
      
                font= {cinzel}
                textAlign='center'
                fillOpacity={0}
                material = {title2Material}
            >
                unprecedented driving
            </Text>
            <Text ref={section2Text7}
                rotation={[0,-Math.PI * 0.5,0]}
                fontSize={0.12}
                position={[0.1,1.45,-2.11]}
    
                font= {cinzel}
                textAlign='center'
                fillOpacity={0}
                material = {title2Material}
            >
                comfort
            </Text>

            {/* SECTION 3 */}

            <Text
                ref={section3Text1}
                rotation={[0.85,2.42,-0.66]} 
                fontSize={0.05}
                position={[0.15,1.65,0.8]}
                maxWidth ={0.45}
                font= {cinzel}
                textAlign='center'
                fillOpacity={0}
                material = {titleMaterial}
            >
                its large built-in storage space will allow 
            </Text>
            <Text
                ref={section3Text2}
                rotation={[0.85,2.42,-0.66]} 
                fontSize={0.04}

                position={[-0.68,1.55,-0.55]}
                maxWidth ={0.4}
                font= {cinzel}
                textAlign='center'
                fillOpacity={0}
                material = {titleMaterial}
            >
                 you to safely store your personal items 
            </Text>

            {/* SECTION 4 */}

            <Text
                ref={section4Text1}
                rotation={[0,0,-Math.PI * 0.027]} 
                fontSize={0.025}
                position={[-0.25,2,0.214]}
                maxWidth ={0.45}
                font= {cinzel}
                textAlign='center'
            >
                <meshStandardMaterial color={[0,0,0]}/>
                its removable high-capacity battery guarantees a long period of use with each recharge
            </Text>

            <Text
                ref={section4Text2}
                rotation={[0,0,-Math.PI * 0.01]} 
                fontSize={0.035}
                position={[-0.25,2.25,0.1]}
                maxWidth ={0.6}
                font= {cinzel}
                fillOpacity={0}
                textAlign='center'
            >
     
                don't be afraid to leave the battery on the bike when it is parked, secure it by locking it with your application
            </Text>

            {/* SECTION 5 */}

            <Text
                ref={section5Text1}
                rotation={[-0.05,-2.92,-0.06]} 
                fontSize={0.03}
                position={[-2.13,1.22,0.1]}
                maxWidth ={0.55}
                font= {cinzel}
                fillOpacity={0}
                textAlign='center'
            >
     
                ride safely and handle the unexpected with disc brakes that quickly stop your momentum
            </Text>

            {/* SECTION 6 */}

            <Text
                ref={section6Text1}
                // rotation={[rotX,rotY,rotZ]} 
                fontSize={0.05}
                position={[-2.25,2,0.1]}
                maxWidth ={0.8}
                font= {cinzel}
                fillOpacity={0}
                textAlign='right'
            >
     
                the impact of the shocks is reduced with its powerful suspensions
            </Text>
            <Text
                ref={section6Text2}
                rotation={[0.19,-2.68,0]} 
                fontSize={0.035}
                position={[-1.4,1.45,0.1]}
                maxWidth ={0.4}
                font= {cinzel}
                fillOpacity={0}
                textAlign='center'
            >
     
                the adjustment of the flexibility and height of the suspension is done with the mobile application
            </Text>

            {/* SECTION 7 */}

            <Text ref={section7Text1}
                   rotation={[0,Math.PI * 1.09,0]} 
                   fontSize={0.045}
                   position={[-2.1,2.55,0.2]}
                   maxWidth ={0.6}
                   font= {cinzel}
                   fillOpacity={0}
                   textAlign='center'
            >
                <meshStandardMaterial color={[0,0,0]} metalness={1} roughness={0} envMapIntensity={5}/>
                keep the best visibility during your night travels thanks to the integrated led headlights
            </Text>

            {/* SECTION 8 */}

            <Text
                rotation={[1.09,2.48,-0.90]}
                position={[-0.9,2.3,0.7]}
                fontSize={0.035}
                maxWidth={0.6}
                font= {cinzel}
                textAlign='center'
                fillOpacity={0}
            >
                the integrated GPS allows you to track your routes,
                record your routes and performances

                Wi-Fi connection is available for easy software and map updates
            </Text>

            <Text
                rotation={[0.97,2.24,-0.86]}
                position={[-1.1,2.52,0.4]}
                fontSize={0.025}
                maxWidth={0.4}
                font= {cinzel}
                textAlign='center'
                fillOpacity={0}
            >
                monitor your speed in real time on the touch screen
            </Text>
            <Text
                rotation={[0.97,2.24,-0.86]}
                position={[-1.1,2.32,-0.3]}
                fontSize={0.025}
                maxWidth={0.4}
                font= {cinzel}
                textAlign='center'
                fillOpacity={0}
            >
                track your routes and calories burned during your trip on your mobile application
            </Text>
        </>
    )
}