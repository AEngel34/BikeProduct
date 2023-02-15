import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { 
    clearTimeline,section1Animation,section2Animation,
    section3Animation,section4Animation,section5Animation,
    section6Animation,section7Animation,section8Animation,
    section9Animation
} from '../HybridComponents/ScrollAnimations.js'
import InterfaceMobile from './InterfaceMobile.js'
gsap.registerPlugin(ScrollTrigger)

export default function ScrollMobile({orbitC,fullBike, pedals, storageClosure, battery, backBike,crutch,wheel,wheelColor,suspension, lightMaterial,greenMaterial}){
    
    ScrollTrigger.normalizeScroll(true)

    window.addEventListener('click',()=>{
        console.log(orbitC.current)
    })


    useEffect(() => {
        
        orbitC.current.target.x = -0.836
        orbitC.current.target.y = 2.081
        orbitC.current.target.z = 0.496
        orbitC.current.object.position.x = -4.722
        orbitC.current.object.position.y = 3.608
        orbitC.current.object.position.z = -2.479

        section1Animation(pedals,orbitC,{x: 0, y: 1.991, z: -2.314},{x: -0.106, y: 1.154, z: -0.171})
        section2Animation(orbitC,{x: -1.936, y: 1.989, z: -1.353},{x: -0.337, y: 1.489, z: -0.923})

        return ()=>{
            clearTimeline()
        }
    }, [])

    return <InterfaceMobile/>
}