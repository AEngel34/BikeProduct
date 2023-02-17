import { useEffect } from 'react'
import { 
    clearTimeline,section1Animation,section2Animation,
    section3Animation,section4Animation,section5Animation,
    section6Animation,section7Animation,section8Animation,
    section9Animation,initTrigger,setInitialPosition
} from '../HybridComponents/ScrollAnimations'
import InterfaceDesktop from './InterfaceDesktop'


export default function ScrollDesktop({
    orbitC,fullBike,pedals,storageClosure,battery,   
    backBike,crutch,wheel,wheelColor,suspension   
}){


window.addEventListener('click',()=>{
    console.log(orbitC.current)
})
    useEffect(() => {
               
        setInitialPosition(orbitC,{x : 1.4, y : 2.375, z : -3.493},{x : 1.4, y : 1.686, z: 0})
        
        initTrigger(3) 
        
        section1Animation(pedals,orbitC,{x: 0.435, y: 1.849, z: -0.876},{x: -0.252, y: 0.764, z: -0})     
        section2Animation(orbitC,{x: -1.02, y: 2.199, z: -1.086},{x: -0.069, y: 1.473, z: -0.273})
        section3Animation(orbitC,{x: -0.064, y: 1.82, z: -0.004},{x: -0.764, y: 1.109, z: 0.499},storageClosure)
        section4Animation(orbitC,{x: 0.061, y: 1.861, z: 0.47},{x: -0.079, y: 2.426, z: 0.52},{x: -0.638, y: 1.659, z: -0.233},storageClosure,battery)
        section5Animation(orbitC,{x: -0.043, y: 2.665, z: -0.551},{x: -1.333, y: 1.066, z: -0.405},{x: -2.303, y: 0.841, z: -0.09})
        section6Animation(orbitC,{x: -1.59, y: 1.885, z: -0.54},{x: -2.293, y: 1.475, z:0.435},suspension)
        section7Animation(orbitC,{x: -1.92, y: 2.603, z: -0.502},{x: -1.339, y: 2.221, z: 0.989})
        section8Animation(orbitC,{x: -0.565, y: 2.533, z: 0.173},{x: -1.213, y: 1.839, z: 0.592})
        section9Animation(orbitC,{x: 0.834, y: 4.748, z: -3.128},{x: -2.445, y: 1.905, z: 2.25},
            fullBike,pedals,backBike,wheel,wheelColor,crutch,
            {x: 0.652, y: 2.618, z: -2.331},{x: -2.325, y: 0.788, z: 0.997}
        )
  
        return ()=>{     
            clearTimeline()
            console.log('scrollDesktopClean')
        }
    }, [])

    return <InterfaceDesktop/>
}