import { createNewText } from "../HybridComponents/TextCreator.js"
import { useRef,useEffect } from "react"
import { useControls } from "leva"
import { clearTextTimeline, section1TextAnimation, titleTextAnimation } from "../HybridComponents/ScrollAnimations.js"

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

    // const {x,y,z} = useControls({
    //     x : {value : Math.PI , min : -Math.PI, max : Math.PI},
    //     y: {value : 0 , min : -Math.PI, max : Math.PI},
    //     z : {value : 0 , min : -Math.PI, max : Math.PI}
    // })


    useEffect(() => {

        titleTextAnimation(sectionRefs.sectionTitle)
        section1TextAnimation(sectionRefs.section1)

        return ()=>{
            clearTextTimeline()
        }
      
    }, [])


    // (ref,rotation,position,fontSize,text,maxWidth,textAlign,opacity,material,lineHeight)
    return(
        <>
            {/* TITLE */}
            {createNewText(sectionRefs.sectionTitle[0],[0.321,-2.28,0.24],[-0.2,4.8,0.98],0.25,'you would never have',Infinity,'center',1)}
            {createNewText(sectionRefs.sectionTitle[1],[0.321,-2.28,0.24],[-0.2,4.1,0.98],.75,'wanted',1,'center',1)}
            {createNewText(sectionRefs.sectionTitle[2],[0.321,-2.28,0.24],[-0.2,3.3,0.98],.74,'to move',5,'center',1)}      
            {createNewText(sectionRefs.sectionTitle[3],[0.321,-2.28,0.24],[-0.2,2.45,0.98],.77,'so much',5,'center',1)} 

            {/* SECTION1 */}
            {createNewText(sectionRefs.section1[0],[0,Math.PI * 1.22,0],[1,3.8,2],.23,'Be assisted in your effort with its powerful engine',3.5)}
            {createNewText(sectionRefs.section1[1],[-2.20,-0.54,-2.64],[-1.97,2.05,-1.935],.035,'starting & pedaling assistance')}
            {createNewText(sectionRefs.section1[3],[0.61,2.66,-0.24],[0.28,1.47,-1.04],.035,'manage the different driving',.6)}
            {createNewText(sectionRefs.section1[2],[0.61,2.66,-0.24],[0.29,1.41,-1.06],.052,'modes with your app',.6)}
            {createNewText(sectionRefs.section1[4],[0,Math.PI,0],[0.35,1.45,-0.01],.04,'regenerative braking recharges the battery during descent or deceleration',.41)}
            {createNewText(sectionRefs.section1[5],[-0.11, 3.14, 0],[-0.5,1.33,0],.05,'Keep a good grip with the non-slip pedals',.5)}  
        </>
    )
}