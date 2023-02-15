import { useEffect } from 'react'
import { 
    clearTimeline,section1Animation,section2Animation,
    section3Animation,section4Animation,section5Animation,
    section6Animation,section7Animation,section8Animation,
    section9Animation, initTrigger, setInitialPosition
} from '../HybridComponents/ScrollAnimations.js'
import InterfaceMobile from './InterfaceMobile.js'


export default function ScrollMobile({orbitC,fullBike, pedals, storageClosure, battery, backBike,crutch,wheel,wheelColor,suspension, lightMaterial,greenMaterial}){
    
    
    window.addEventListener('click',()=>{
        console.log(orbitC.current)
    })


    useEffect(() => {
         
        setInitialPosition(orbitC,{x : -4.722, y : 3.608, z: -2.479},{x : -0.836, y : 2.081, z :0.496})
        
        initTrigger() 
              
        section1Animation(pedals,orbitC,{x: 0, y: 1.991, z: -2.314},{x: -0.106, y: 1.154, z: -0.171})
        section2Animation(orbitC,{x: -1.936, y: 1.989, z: -1.353},{x: -0.337, y: 1.489, z: -0.923})
        section3Animation(orbitC,{x: -0.064, y: 1.82, z: -0.004},{x: -0.764, y: 1.109, z: 0.499},storageClosure)
        section4Animation(orbitC,{x: 0.061, y: 1.861, z: 0.47},{x: -0.079, y: 2.426, z: 0.52},{x: -0.638, y: 1.659, z: -0.233},storageClosure,battery)
        section5Animation(orbitC,{x: -0.043, y: 2.665, z: -0.551},{x: -1.333, y: 1.066, z: -0.405},{x: -2.303, y: 0.841, z: -0.09})
        section6Animation(orbitC,{x: -1.59, y: 1.885, z: -0.54},{x: -2.293, y: 1.475, z: 0.435},suspension)
        section7Animation(orbitC,{x: -1.92, y: 2.603, z: -0.502},{x: -1.339, y: 2.221, z: 0.989})
        section8Animation(orbitC,{x: -0.565, y: 2.533, z: 0.173},{x: -1.213, y: 1.839, z: 0.592})
        section9Animation(orbitC,{x: 0.834, y: 4.748, z: -3.128},{x: -2.445, y: 1.905, z: 2.25},
            fullBike,pedals,backBike,wheel,wheelColor,crutch,
            {x: 0.652, y: 2.618, z: -2.331},{x: -2.325, y: 0.788, z: 0.997}
        )
        return ()=>{
            clearTimeline()
        }
    }, [])

    return <InterfaceMobile/>
}