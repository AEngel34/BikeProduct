import { useEffect } from 'react'
import { 
    clearTimeline,section1Animation,section2Animation,
    section3Animation,section4Animation,section5Animation,
    section6Animation,section7Animation,section8Animation,
    section9Animation, initTrigger, setInitialPosition
} from '../HybridComponents/ScrollAnimations.js'
import InterfaceMobile from './InterfaceMobile.js'


export default function ScrollMobile({orbitC,fullBike, pedals, storageClosure, battery, backBike,crutch,wheel,wheelColor,suspension}){
 
    useEffect(() => {
         
        setInitialPosition(orbitC,{x : -4.722, y : 3.608, z: -2.479},{x : -0.836, y : 2.081, z :0.496})
        
        initTrigger(2) 
              
        section1Animation(pedals,orbitC,{x: 1.223, y: 1.879, z: -1.7},{x: -0.2, y: 0.01, z: 1.754})
        section2Animation(orbitC,{x: -1.936, y: 1.989, z: -1.353},{x: -0.337, y: 1.489, z: -0.923})
        section3Animation(orbitC,{x: 0.186, y: 1.779, z: -0.294},{x: -1.429, y: 0.991, z: 1.258},storageClosure)
        section4Animation(orbitC,{x: 0.283, y: 1.924, z: -0.738},{x: 0.232, y: 2.463, z: -0.739},{x: -1.194, y: 1.713, z: 1.688},storageClosure,battery)
        section5Animation(orbitC,{x: 0.623, y: 2.613, z: -1},{x: 0.066, y: 1.194, z: -0.909},{x: -2.349, y: 0.422, z: -0.076})
        section6Animation(orbitC,{x: -0.821, y: 2.152, z: -1.23},{x: -2.398, y: 1.16, z: 0.396},suspension)
        section7Animation(orbitC,{x: -2.392, y: 3.326, z: -0.735},{x: -1.846, y: 2.416, z: -0.014})
        section8Animation(orbitC,{x: -0.677, y: 2.752, z: -0.328},{x: -1.256, y: 2.224, z: 0.513})
        section9Animation(orbitC,{x: 0.834, y: 4.748, z: -3.128},{x: -2.445, y: 1.905, z: 2.25},
            fullBike,pedals,backBike,wheel,wheelColor,crutch,
            {x: 2.985, y: 3.31, z: -2.695},{x: -2.581, y: 0.803, z: 2.565}
        )
        return ()=>{
            clearTimeline()
            console.log('cleanScrollMobile')
        }
    }, [])

    return <InterfaceMobile/>
}