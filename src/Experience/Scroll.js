import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger"
import ScrollSmoother from "gsap/ScrollSmoother"
gsap.registerPlugin(ScrollTrigger,ScrollSmoother)

export default function Scroll({orbitC,fullBike, pedals, storageClosure, battery, backBike,crutch,wheel,wheelColor,suspension, lightMaterial,greenMaterial}){

    useEffect(() => {
        orbitC.current.target.x = 1.4
        orbitC.current.target.y = 1.686
        orbitC.current.target.z = 0

        section1Animation()        
        section2Animation()
        section3Animation()
        section4Animation()
        section5Animation()
        section6Animation()
        section7Animation()
        section8Animation()
        section9Animation()
    }, [])

    ScrollSmoother.create({
        smooth : 3,
        effects: true
    })

    const section1Animation = ()=>{
        gsap.timeline({
            scrollTrigger: {
                trigger: ".container", scrub: true,               
                start: "top top", end: "10% top"                             
            }
        })
        .to(pedals.current.rotation,{z : Math.PI * 2},0)   
        .to(pedals.current.children[0].rotation,{z : -Math.PI * 2},0) 
        .to(pedals.current.children[1].rotation,{z : -Math.PI * 2},0)           
        .to(orbitC.current.object.position,{x: 0.435, y: 1.849, z: -0.876,ease:'none'},0) 
        .to(orbitC.current.target,{x: -0.252, y: 0.764, z: -0,ease:'none'},0)            
    }

    const section2Animation = ()=>{
        gsap.timeline({
            scrollTrigger: {
                trigger: ".container", scrub: true,               
                start: "10% top", end: "18% top"                             
            }
        })
        .to(orbitC.current.object.position,{x: -1.02, y: 2.199, z: -1.086,ease:'none'},0)
        .to(orbitC.current.target,{x: -0.069, y: 1.473, z: -0.273,ease:'none'},0)
    }

    const section3Animation = ()=>{
        gsap.timeline({
            scrollTrigger: {
                trigger: ".container", scrub: true,               
                start: "23% top", end: "30% top"                       
            }
        })
        .to(orbitC.current.object.position,{x: -0.064, y: 1.82, z: -0.004,ease:'none'},0)
        .to(orbitC.current.target,{x: -0.764, y: 1.109, z: 0.499, ease:'none'},0)
        .to(storageClosure.current.position,{x : 0.046445 , y :1.4081},0.5)
    }

    const section4Animation = ()=>{
        gsap.timeline({
            scrollTrigger: {
                trigger: ".container", scrub: true,               
                start: "30% top", end: "45% top" 
            }
        })
        .to(storageClosure.current.position,{x :-0.322391, y :1.57526, ease:'none'},0)
        .to(orbitC.current.object.position,{x: 0.061, y: 1.861, z: 0.47,ease:'none'},0)
        .to(orbitC.current.object.position,{x: -0.079, y: 2.426, z: 0.52,ease:'none',duration : 1},0.5)
        .to(orbitC.current.target,{x: -0.638, y: 1.659, z: -0.233, ease:'none',duration : 1},0.5)
        .to(battery.current.position,{x : -0.302424 , y : 2.2387 , ease:'none'},1.5)
        .to(battery.current.position,{x : -0.318405, y : 2.02922, ease:'none'},2)
        .to(greenMaterial.color,{r : 1.4, g : 0.3, ease : 'none'},2.5)
    }

    const section5Animation = ()=>{
        gsap.timeline({
            scrollTrigger: {
                trigger: ".container", scrub: true,               
                start: "45% top", end: "54% top"                             
            }
        })
        .to(orbitC.current.object.position,{x: -0.043, y: 2.665, z: -0.551,ease:'none',duration : 0.8},0)
        .to(orbitC.current.object.position,{x: -1.333, y: 1.066, z: -0.405,ease:'none',duration : 1.2},0.8)
        .to(orbitC.current.target,{x: -2.303, y: 0.841, z: -0.09, ease:'none',duration : 1.2},0.8)
    }

    const section6Animation = ()=>{
        gsap.timeline({
            scrollTrigger: {
                trigger: ".container", scrub: true,               
                start: "58.5% top", end: "68% top"                             
            }
        })
        .to(orbitC.current.object.position,{x: -1.59, y: 1.885, z: -0.54,ease:'none',duration : 1.3},0)
        .to(orbitC.current.target,{x: -2.293, y: 1.475, z: 0.435,ease:'none',duration : 1.3},0)
        .to(suspension.current.position,{x : -0.10146 , y: -0.33934,ease:'none'},1.3)         
        .to(suspension.current.position,{x : -0.078, y: -0.26305,ease:'none' },1.8)
    }

    const section7Animation = ()=>{
        gsap.timeline({
            scrollTrigger: {
                trigger: ".container", scrub: true,               
                start: "68% top", end: "77% top"                             
            }
        })
        .to(orbitC.current.object.position,{x: -1.92, y: 2.603, z: -0.502,ease:'none',duration : 1.3},0)
        .to(orbitC.current.target,{x: -1.339, y: 2.221, z: 0.989,ease:'none',duration : 1.3},0)
        .to(lightMaterial.color,{r : 35, g : 35, b : 35,ease:'none'},1.3)
    }

    const section8Animation = ()=>{
        gsap.timeline({
            scrollTrigger: {
                trigger: ".container", scrub: true,               
                start: "77% top", end: "83% top"                             
            }
        })
        .to(orbitC.current.target,{x: -1.191, y: 1.825, z: 0.598, ease:'none'},0)
        .to(orbitC.current.object.position,{x: -0.563, y: 2.721, z: 0.246,ease:'none'},0)
    }

    const section9Animation = ()=>{
        gsap.timeline({
            scrollTrigger: {
                trigger: ".container", scrub: true,               
                start: "87% top", end: "98% bottom"                             
            }
        })
        .to(orbitC.current.object.position,{x: 0.834, y: 4.748, z: -3.128, ease:'none'},0)
        .to(orbitC.current.target,{x: -2.445, y: 1.905, z: 2.25, ease:'none'},0)
        .to(fullBike.current.rotation,{z : Math.PI * 0.4, ease:'none'},0)
        .to(fullBike.current.position,{y :2.48, ease:'none'},0)
        .to(pedals.current.children[0].rotation,{z : -Math.PI * 2.4, ease:'none'},0)
        .to(pedals.current.children[1].rotation,{z : -Math.PI * 2.4, ease:'none'},0)
        .to(backBike.current.rotation,{z : -Math.PI, ease:'none'},0.08)
        .to(wheel.current.rotation,{z : Math.PI * 2, ease:'none'},0.08)
        .to(wheelColor.current.rotation,{z : Math.PI * 2, ease:'none'},0.08)
        .to(crutch.current.rotation,{z : -Math.PI * 0.6, ease:'none'},0.6)
        .to(orbitC.current.object.position,{x: 0.652, y: 2.618, z: -2.331,ease:'none'},0.6)
        .to(orbitC.current.target,{x: -2.325, y: 0.788, z: 0.997, ease:'none'},0.6)
        .to(fullBike.current.rotation,{z : -Math.PI *0.05, ease:'none'},0.6)
        .to(fullBike.current.position,{y :-0.3, ease:'none'},0.6)
        .to(pedals.current.children[0].rotation,{z : -Math.PI * 1.95, ease:'none'},0.6)
        .to(pedals.current.children[1].rotation,{z : -Math.PI * 1.95, ease:'none'},0.6)
    }

}