import { createNewText } from "../HybridComponents/TextCreator.js"
import { useRef,useEffect } from "react"
import { useControls } from "leva"
import gsap from 'gsap'

export default function InterfaceMobile(){

    let tl1,tl2

    const sectionRefs = {
        sectionTitle: Array.from({ length: 4 }, () => useRef()),
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

    const {x,y,z} = useControls({
        x : {value : Math.PI , min : -Math.PI, max : Math.PI},
        y: {value : 0 , min : -Math.PI, max : Math.PI},
        z : {value : 0 , min : -Math.PI, max : Math.PI}
    })


    useEffect(() => {

        titleScrollTrigger()
        section1ScrollTrigger()
      
    }, [])

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


    // (ref,rotation,position,fontSize,text,maxWidth,textAlign,opacity,material,lineHeight)
    return(
        <>
            {/* TITLE */}
            {createNewText(sectionRefs.sectionTitle[0],[0.321,-2.28,0.24],[-0.2,4.8,0.98],0.25,'you would never have',Infinity,'center',1)}
            {createNewText(sectionRefs.sectionTitle[1],[0.321,-2.28,0.24],[-0.2,4.1,0.98],.75,'wanted',1,'center',1)}
            {createNewText(sectionRefs.sectionTitle[2],[0.321,-2.28,0.24],[-0.2,3.3,0.98],.74,'to move',5,'center',1)}      
            {createNewText(sectionRefs.sectionTitle[3],[0.321,-2.28,0.24],[-0.2,2.45,0.98],.77,'so much',5,'center',1)} 

            {/* SECTION1 */}
            {createNewText(sectionRefs.section1[0],[0,Math.PI * 1.22,0],[1,3.2,2],.23,'Be assisted in your effort with its powerful engine',3.5)}
            {createNewText(sectionRefs.section1[1],[0.5,2.90,-0.11],[0.42,1.5,-1.42],.05,'starting & pedaling assistance',1)}
            {createNewText(sectionRefs.section1[3],[0.61,2.66,-0.24],[0.28,1.47,-1.04],.035,'manage the different driving',.6)}
            {createNewText(sectionRefs.section1[2],[0.61,2.66,-0.24],[0.29,1.41,-1.06],.052,'modes with your app',.6)}
            {createNewText(sectionRefs.section1[4],[0,Math.PI,0],[0.35,1.45,-0.01],.04,'regenerative braking recharges the battery during descent or deceleration',.41)}
            {createNewText(sectionRefs.section1[5],[-0.11, 3.14, 0],[-0.5,1.33,0],.05,'Keep a good grip with the non-slip pedals',.5)}  
        </>
    )
}