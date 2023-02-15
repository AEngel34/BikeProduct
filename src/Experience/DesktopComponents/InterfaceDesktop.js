import { useEffect, useRef } from "react"
import { baseTextMaterial, blackMaterial } from "../HybridComponents/Materials"
import { createNewText } from "../HybridComponents/TextCreator"
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default function InterfaceDesktop(){

    let tl1,tl2,tl3,tl4,tl5,tl6,tl7,tl8,tl9
    let tlArray = []

    const sectionRefs = {
        sectionTitle: Array.from({ length: 3 }, () => useRef()),
        section1: Array.from({ length: 6 }, () => useRef()),
        section2: Array.from({ length: 7 }, () => useRef()),
        section3: Array.from({ length: 2 }, () => useRef()),
        section4: Array.from({ length: 2 }, () => useRef()),
        section5: Array.from({ length: 4 }, () => useRef()),
        section6: Array.from({ length: 3 }, () => useRef()),
        section7: Array.from({ length: 3 }, () => useRef()),
        section8: Array.from({ length: 3 }, () => useRef()),
        section9: Array.from({ length: 6 }, () => useRef()),
    }

    useEffect(()=>{
        titleScrollTrigger()
        section1ScrollTrigger()
        section2ScrollTrigger()
        section3ScrollTrigger()
        section4ScrollTrigger()
        section5and6ScrollTrigger()
        section7ScrollTrigger()
        section8ScrollTrigger()
        section9ScrollTrigger()

        tlArray.push(tl1,tl2,tl3,tl4,tl5,tl6,tl7,tl8,tl9)
        
        sectionRefs.sectionTitle.map((text)=>{
            text.current.matrixAutoUpdate = false
            text.current.updateMatrix()
        })
        sectionRefs.section1.map((text)=>{
            text.current.matrixAutoUpdate = false
            text.current.updateMatrix()
        })
        sectionRefs.section4[1].current.matrixAutoUpdate = false
        sectionRefs.section4[1].current.updateMatrix()
        sectionRefs.section5.map((text)=>{
            text.current.matrixAutoUpdate = false
            text.current.updateMatrix()
        })
        sectionRefs.section7.map((text)=>{
            text.current.matrixAutoUpdate = false
            text.current.updateMatrix()
        })
        sectionRefs.section8.map((text)=>{
            text.current.matrixAutoUpdate = false
            text.current.updateMatrix()
        })
        sectionRefs.section9.map((text)=>{
            text.current.matrixAutoUpdate = false
            text.current.updateMatrix()
        })

        return()=>{ tlArray.map( (tl)=>tl.clear() ) }
    },[])

    

    const titleScrollTrigger = ()=>{

        tl1 = gsap.timeline({
            scrollTrigger: {
              trigger: ".container",scrub: true,              
              start: "0% top",end: "3% top",              
            }
          }).to(sectionRefs.sectionTitle.map((ref) => ref.current),{ fillOpacity: 0 },0)
          .to('.scrollIndication',{opacity : 0},0)  
          .to('.fakeMenu',{opacity : 0},0)   
    }

    const section1ScrollTrigger = ()=>{
        tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".container", scrub: true,               
                start: "3% top", end: "18% top",               
            }
        })
        .to(sectionRefs.section1[0].current,{fillOpacity : 1,duration : 1,ease:'none'},0)
        .to(sectionRefs.section1[1].current,{fillOpacity : 1,duration : 1,ease:'none'},0.3)
        .to(sectionRefs.section1[2].current,{fillOpacity : 1,duration : 1,ease:'none'},0.6)
        .to(sectionRefs.section1[3].current,{fillOpacity : 1,duration : 1,ease:'none'},0.6)
        .to(sectionRefs.section1[4].current,{fillOpacity : 1,duration : 1,ease:'none'},1.1)
        .to(sectionRefs.section1[5].current,{fillOpacity : 1,duration : 1,ease:'none'},1.6)
        .to(sectionRefs.section1.map((ref)=> ref.current),{fillOpacity : 0, ease : 'none'},2.3)           
    }

    const section2ScrollTrigger = ()=>{
        tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".container", scrub: true,               
                start: "17% top", end: "23% top",              
            }
        })
        .to(sectionRefs.section2[0].current,{fillOpacity : 1,ease:'none',duration : 2},1)
        .to(sectionRefs.section2[1].current,{fillOpacity : 1,ease:'none',duration : 2},1.5)
        .to(sectionRefs.section2[2].current,{fillOpacity : 1,ease:'none',duration : 2},2)
        .to(sectionRefs.section2[3].current,{fillOpacity : 1,ease:'none',duration : 2},2.5)
        .to(sectionRefs.section2[4].current,{fillOpacity : 1,ease:'none',duration : 2},3)
        .to(sectionRefs.section2[5].current,{fillOpacity : 1,ease:'none',duration : 2},3.5)
        .to(sectionRefs.section2[6].current,{fillOpacity : 1,ease:'none',duration : 2},4)
        .to(sectionRefs.section2[0].current.position,{z : -1.09,ease:'none',duration : 2},0.5)
        .to(sectionRefs.section2[1].current.position,{z : -1.095,ease:'none',duration : 2},1)
        .to(sectionRefs.section2[2].current.position,{z : -1.099,ease:'none',duration : 2},1.5)
        .to(sectionRefs.section2[3].current.position,{z : -1.1,ease:'none',duration : 2},2)
        .to(sectionRefs.section2[4].current.position,{z : -1.107,ease:'none',duration : 2},2.5)
        .to(sectionRefs.section2[5].current.position,{z : -1.107,ease:'none',duration : 2},3)
        .to(sectionRefs.section2[6].current.position,{z : -1.11,ease:'none',duration : 2},3.5)
        .to(sectionRefs.section2.map((ref)=>ref.current),{fillOpacity : 0,ease:'none',duration : 2},5)
    }

    const section3ScrollTrigger = ()=>{
        tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: ".container", scrub: true,               
                start: "26% top", end: "30% top"               
            }
        })
        .to(sectionRefs.section3.map((ref)=>ref.current),{fillOpacity : 1,duration : 1.5,ease:'none'},0.5)
        .to(sectionRefs.section3[0].current.position,{x : -0.15, z : 0.4,duration : 1.5,ease:'none'},0)
        .to(sectionRefs.section3[1].current.position,{x : -0.38, z : -0.15,duration : 1.5,ease:'none'},0) 
        .to(sectionRefs.section3.map((ref)=>ref.current),{fillOpacity : 0, ease : 'none'},1.5)       
    }

    const section4ScrollTrigger = ()=>{
        tl5 = gsap.timeline({
            scrollTrigger: {
                trigger: ".container", scrub: true,               
                start: "37.5% top", end: "42.5% top",               
            }
        })
        .to(sectionRefs.section4[0].current.position,{x : -0.25, y : 2.21,duration : 1,ease:'none'},0)
        .to(sectionRefs.section4[0].current.position,{x : -0.27, y : 2,duration : 1,ease:'none'},1)
        
        gsap.timeline({
            scrollTrigger: {
                trigger: ".container", scrub: true,               
                start: "42.5% top", end: "46% top"               
            }
        })
        .to(sectionRefs.section4[1].current,{fillOpacity : 1 ,ease:'none'},0)
        .to(sectionRefs.section4.map((ref)=> ref.current),{fillOpacity : 0, ease : 'none'},1)
    }

    const section5and6ScrollTrigger = ()=>{
        tl6 = gsap.timeline({
            scrollTrigger: {
                trigger: ".container", scrub: true,               
                start: "53% top", end: "68% top"               
            }
        })
       .to(sectionRefs.section5[0].current,{fillOpacity : 1,ease: 'none'},0)
       .to(sectionRefs.section5[1].current,{fillOpacity : 1,ease: 'none'},0.2)
       .to(sectionRefs.section5[2].current,{fillOpacity : 1,ease: 'none'},0.4)
       .to(sectionRefs.section5[3].current,{fillOpacity : 1,ease: 'none'},0.6)
       .to(sectionRefs.section5[0].current,{fontSize : 0.15,ease: 'none'},0.2)
       .to(sectionRefs.section5[1].current,{fontSize : 0.068,ease: 'none'},0.4)
       .to(sectionRefs.section5[2].current,{fontSize : 0.046,ease: 'none'},0.6)
       .to(sectionRefs.section5[3].current,{fontSize : 0.096,ease: 'none'},0.8)
       .to(sectionRefs.section5.map((ref)=> ref.current),{fillOpacity : 0, ease : 'none'},1.2)
       .to(sectionRefs.section6[0].current,{fillOpacity : 1,ease: 'none',duration : 2},2.8)
       .to(sectionRefs.section6[1].current,{fillOpacity : 1,ease: 'none',duration : 2},3.1)
       .to(sectionRefs.section6[0].current.position,{x : -2.1,z : -0.12,ease: 'none',duration : 2},2.6)
       .to(sectionRefs.section6[1].current.position,{x:-2.2, z: -0.44,ease: 'none',duration : 2},2.9)
       .to(sectionRefs.section6.map((ref)=> ref.current),{fillOpacity : 0, ease: 'none'},4.9)
    }

    const section7ScrollTrigger= ()=>{
        tl7 = gsap.timeline({
            scrollTrigger: {
                trigger: ".container", scrub: true,               
                start: "74.5% top", end: "77% top"               
            }
        })
        .to(sectionRefs.section7.map((ref)=>ref.current),{fillOpacity : 1,ease: 'none', duration : 3},0)
        .to(blackMaterial.color,{r : 2, g : 2 , b : 2, ease:'none',duration : 3},0)
        .to(sectionRefs.section7.map((ref)=>ref.current),{fillOpacity : 0},5)
    }

    const section8ScrollTrigger= ()=>{
        tl8 = gsap.timeline({
            scrollTrigger: {
                trigger: ".container", scrub: true,               
                start: "83% top", end: "87% top",                
            }
        })
        .to(sectionRefs.section8.map((ref)=>ref.current),{fillOpacity : 1,duration : 9,ease:'none'},0)
        .to(sectionRefs.section8.map((ref)=>ref.current),{fillOpacity : 0,duration : 3,ease:'none'},9)
    }

    const section9ScrollTrigger= ()=>{
        tl9 = gsap.timeline({
            scrollTrigger: {
                trigger: ".container", scrub: true,               
                start: "90% top", end: "100% bottom",
            }
        })
        .to(sectionRefs.section9[0].current,{fillOpacity : 1,ease: 'none',duration : 1.5},1.5)
        .to(sectionRefs.section9[0].current,{fillOpacity : 0,ease: 'none',duration : .5},3.5)
        .to(sectionRefs.section9[1].current,{fillOpacity : 1,ease: 'none',duration : 1},7)
        .to(sectionRefs.section9[2].current,{fillOpacity : 1,ease: 'none',duration : 1},7)
        .to(sectionRefs.section9[3].current,{fillOpacity : 1,ease: 'none',duration : 1},7)
        .to(sectionRefs.section9[4].current,{fillOpacity : 1,ease: 'none',duration : 1},7)
        .to(sectionRefs.section9[5].current,{fillOpacity : 1,ease: 'none',duration : 1},8)  
    }



    return(
        <>
            {/* TITLE */}
            {createNewText(sectionRefs.sectionTitle[0],[Math.PI * 0.05,Math.PI,0],[1.4,3.1,0],0.65,'you would never have',Infinity,'center',1)}
            {createNewText(sectionRefs.sectionTitle[1],[Math.PI * 0.05,Math.PI,0],[3,2.4,2],1.1,'wanted to move',Infinity,'center',1)}
            {createNewText(sectionRefs.sectionTitle[2],[Math.PI * 0.05,Math.PI,0],[3.2,1.8,-1],.55,'so much',5,'center',1)}      

            {/* SECTION1 */}
            {createNewText(sectionRefs.section1[0],[0,Math.PI,0],[0.8,2.5,0],.1,'Be assisted in your effort with its powerful engine',3)}
            {createNewText(sectionRefs.section1[1],[0.5,2.90,-0.11],[0.42,1.5,-1.42],.05,'starting & pedaling assistance',1)}
            {createNewText(sectionRefs.section1[3],[0.61,2.66,-0.24],[0.28,1.47,-1.04],.035,'manage the different driving',.6)}
            {createNewText(sectionRefs.section1[2],[0.61,2.66,-0.24],[0.29,1.41,-1.06],.052,'modes with your app',.6)}
            {createNewText(sectionRefs.section1[4],[0,Math.PI,0],[0.35,1.45,-0.01],.04,'regenerative braking recharges the battery during descent or deceleration',.41)}
            {createNewText(sectionRefs.section1[5],[-0.11, 3.14, 0],[-0.5,1.33,0],.05,'Keep a good grip with the non-slip pedals',.5)}
            
            {/* SECTION2 */}
            {createNewText(sectionRefs.section2[0],[0,-Math.PI * 0.5,0],[0.1,2.03,-2.09],.1,'made with',1)}
            {createNewText(sectionRefs.section2[1],[0,-Math.PI * 0.5,0],[0.1,1.94,-2.095],.06,'environmentally')}
            {createNewText(sectionRefs.section2[2],[0,-Math.PI * 0.5,0],[0.1,1.865,-2.099],.056,'friendly materials')}
            {createNewText(sectionRefs.section2[3],[0,-Math.PI * 0.5,0],[0.1,1.7,-2.1],.08,'the lightness')}
            {createNewText(sectionRefs.section2[4],[0,-Math.PI * 0.5,0],[0.1,1.62,-2.107],.043,'of carbon offers you an')}
            {createNewText(sectionRefs.section2[5],[0,-Math.PI * 0.5,0],[0.1,1.55,-2.107],.045,'unprecedented driving')}
            {createNewText(sectionRefs.section2[6],[0,-Math.PI * 0.5,0],[0.1,1.45,-2.11],.12,'comfort')}

            {/* SECTION 3 */}
            {createNewText(sectionRefs.section3[0],[0.85,2.42,-0.655],[0.15,1.65,0.8],.05,'its large built-in storage space will allow',.45)}
            {createNewText(sectionRefs.section3[1],[0.85,2.42,-0.66],[-0.68,1.55,-0.55],.04,'you to safely store your personal items',.4)}

            {/* SECTION 4 */}
            {createNewText(sectionRefs.section4[0],[0,0,-Math.PI * 0.027],[-0.25,2,0.214],.025,'its removable high-capacity battery guarantees a long period of use with each recharge',.45,'center',1,blackMaterial)}
            {createNewText(sectionRefs.section4[1],[0,0,-Math.PI * 0.01],[-0.25,2.25,0.1],.035,`don't be afraid to leave the battery on the bike when it is parked, secure it by locking it with your application`,.6)}

            {/* SECTION 5 */}
            {createNewText(sectionRefs.section5[0],[0,Math.PI * 0.58,0],[-2.2,1.15,-0.58],.000001,'ride safely')}
            {createNewText(sectionRefs.section5[1],[0,Math.PI * 0.58,0],[-2.2,0.95,-0.58],.000001,'handle the unexpected')}
            {createNewText(sectionRefs.section5[2],[0,Math.PI * 0.58,0],[-2.2,0.86,-0.58],.000001,'with disc brakes that quickly stop')}
            {createNewText(sectionRefs.section5[3],[0,Math.PI * 0.58,0],[-2.2,0.76,-0.58],.000001,'your momentum')}   

            {/* SECTION 6 */}
            {createNewText(sectionRefs.section6[0],[0.49,2.3,-0.41],[-3.1,1.95,-1.12],.055,'the impact of the shocks is reduced with its powerful suspensions',1,'right')}
            {createNewText(sectionRefs.section6[1],[0.49,2.3,-0.41],[-3.2,1.58,-1.44],.05,'flexibility and height adjustable with the app',.35,'right')}

            {/* SECTION 7 */}
            {createNewText(sectionRefs.section7[0],[0,Math.PI * 1.11,0],[-2.1,2.7,0.2],.075,'KEEP A CLEAR VIEW',10,'center',0,blackMaterial)}
            {createNewText(sectionRefs.section7[1],[0,Math.PI * 1.11,0],[-2.108,2.6,0.2],.0555,'when traveling at night',.8,'center',0,blackMaterial)}
            {createNewText(sectionRefs.section7[2],[0,Math.PI * 1.11,0],[-2.12,2.5,0.21],.044,'with integrated led headlights',.8,'center',0,blackMaterial)}

            {/* SECTION 8 */}
            {createNewText(sectionRefs.section8[1],[1.03,2.50,-0.799],[-0.67,2.23,0.63],.035,
                'the integrated GPS allows you to track your routes, record your routes and performances Wi-Fi connection is available for easy software and map updates',.6
            )}
            {createNewText(sectionRefs.section8[0],[1.03,2.50,-0.79],[-0.78,2.43,0.65],.035,'monitor your speed in real time on the touch screen',.6)}
            {createNewText(sectionRefs.section8[2],[1.03,2.50,-0.81],[-0.54,2,0.6],.03,'track your calories burned during your trip on your mobile application',.65)}

            {/* SECTION 9 */}
            {createNewText(sectionRefs.section9[0],[0.15,Math.PI * 0.845,-0.075],[-2,4.7,0.8],.92,'arrived at destination ?')}
            {createNewText(sectionRefs.section9[1],[0.15,Math.PI * 0.77,-0.102],[-0.15,2.7,-0.3],.38,'FOLD AND STORE')}
            {createNewText(sectionRefs.section9[2],[0.15,Math.PI * 0.77,-0.102],[-4.00,2.92,-1.62],.3,'your bike with a')}
            {createNewText(sectionRefs.section9[3],[0.15,Math.PI * 0.77,-0.102],[-4.00,2.645,-1.65],.325,'disconcerting')}
            {createNewText(sectionRefs.section9[4],[0.15,Math.PI * 0.77,-0.102],[-2.68,2.17,1.3],.578,'ease, it would become almost invisible')}
            {createNewText(sectionRefs.section9[5],[0.15,Math.PI * 0.77,-0.102],[-2.4,1.1,-1.88],.1,
                'this product is fictitious and is not available for sale, it has been thought and created in order to demonstrate the creativity'+
                ' development and 3D modeling skills of your next favorite creative developer you can contact him via this e-mail address : contact@aengel-dev.com',
                2.9,'center',0,baseTextMaterial,2.8
            )}
        </> 
    )
}