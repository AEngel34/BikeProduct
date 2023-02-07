import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger"
import ScrollSmoother from "gsap/ScrollSmoother"
gsap.registerPlugin(ScrollTrigger,ScrollSmoother)

export default function Scroll({orbitC}){

    useEffect(() => {
        orbitC.current.target.x = -0.211
        orbitC.current.target.y = 1.75
        orbitC.current.target.z = -0.38

        initScrollTrigger()

    }, [])

    ScrollSmoother.create({
        smooth : 3,
        effects: true
    })

    const initScrollTrigger = ()=>{

        const testTl= new gsap.timeline({
            scrollTrigger: {
                trigger: ".container",
                scrub: true,
                start: "top top",
                end: "10% top",
                markers : true
            }
        })
        testTl.to(orbitC.current.object.position,{x: 0.435, y: 1.849, z: -0.876,ease:'none'}) 
        testTl.to(orbitC.current.target,{x: -0.252, y: 0.764, z: -0,ease:'none'},0)
            
           

        const test2Tl= new gsap.timeline({
            scrollTrigger: {
                trigger: ".container",
                scrub: true,
                start: "10% top",
                end: "20% top",
                markers : true
            }
        })

        test2Tl.to(orbitC.current.object.position,{x: -1.428, y: 1.974, z: 1.564,ease:'none'},0)
        test2Tl.to(orbitC.current.target,{x:-0.825, y: 1.373, z: 2,ease:'none'},0)
        test2Tl.to(orbitC.current.target,{x: -0.294, y: 1.034, z: 0.087,ease:'none'},.5)
        
    }
}