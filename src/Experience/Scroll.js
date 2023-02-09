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
        initScrollTrigger()

    }, [])

    window.addEventListener('click',()=>{
        console.log(orbitC.current)
    })

    ScrollSmoother.create({
        smooth : 3,
        effects: true
    })

    const initScrollTrigger = ()=>{

        section1Animation()          

        section2Animation()

        section3Animation()
    
        section4Animation()
    
        section5Animation()

        section6Animation()

        section7Animation()
    
          
        const section8= new gsap.timeline({
            scrollTrigger: {
                trigger: ".container",
                scrub: true,
                start: "70% top",
                end: "80% top"              
            }
        })

        section8.to(orbitC.current.object.position,{x: -1.247, y: 2.447, z: -0.422, ease:'none'},0)
        section8.to(orbitC.current.target,{x: -1.49, y: 1.759, z: 0.255, ease:'none'},0)
        section8.to(orbitC.current.object.position,{x: -0.633, y: 2.643, z: -0.071,ease:'none'},0.5)

       section9Animation()
    }

    const section1Animation = ()=>{
        const section1= new gsap.timeline({
            scrollTrigger: {
                trigger: ".container",
                scrub: true,
                start: "top top",
                end: "10% top"              
            }
        })
        section1.to(pedals.current.rotation,{z : Math.PI * 2},0)   
        section1.to(pedals.current.children[0].rotation,{z : -Math.PI * 2},0) 
        section1.to(pedals.current.children[1].rotation,{z : -Math.PI * 2},0)           
        section1.to(orbitC.current.object.position,{x: 0.435, y: 1.849, z: -0.876,ease:'none'},0) 
        section1.to(orbitC.current.target,{x: -0.252, y: 0.764, z: -0,ease:'none'},0)
            
    }

    const section2Animation = ()=>{
        const section2= new gsap.timeline({
            scrollTrigger: {
                trigger: ".container",
                scrub: true,
                start: "10% top",
                end: "20% top"              
            }
        })

        section2.to(orbitC.current.object.position,{x: -1.457, y: 1.9, z: -0.562,ease:'none'},0)
        section2.to(orbitC.current.target,{x: -0.614, y: 1.344, z: 0.575,ease:'none'},0)
    }

    const section3Animation = ()=>{
        const section3= new gsap.timeline({
            scrollTrigger: {
                trigger: ".container",
                scrub: true,
                start: "20% top",
                end: "30% top"              
            }
        })

        section3.to(orbitC.current.object.position,{x: -0.064, y: 1.82, z: -0.004,ease:'none'},0)
        section3.to(orbitC.current.target,{x: -0.764, y: 1.109, z: 0.499, ease:'none'},0)
        section3.to(storageClosure.current.position,{x : 0.046445 , y :1.4081},0.5)
    }

    const section4Animation = ()=>{
        const section4= new gsap.timeline({
            scrollTrigger: {
                trigger: ".container",
                scrub: true,
                start: "30% top",
                end: "40% top"              
            }
        })
        section4.to(storageClosure.current.position,{x :-0.322391, y :1.57526, ease:'none'},0)
        section4.to(orbitC.current.object.position,{x: -0.108, y: 1.826, z: 1.037,ease:'none'},0)
        section4.to(orbitC.current.object.position,{x: -0.079, y: 2.426, z: 0.52,ease:'none'},0.5)
        section4.to(orbitC.current.target,{x: -0.638, y: 1.659, z: -0.233, ease:'none'},0.5)
        section4.to(battery.current.position,{x : -0.302424 , y : 2.2387 , ease:'none'},1)
        section4.to(battery.current.position,{x : -0.318405, y : 2.02922, ease:'none'},1.5)
        section4.to(greenMaterial.color,{r : 1.4, g : 0.3, ease : 'none'},2)
    }

    const section5Animation = ()=>{
        const section5= new gsap.timeline({
            scrollTrigger: {
                trigger: ".container",
                scrub: true,
                start: "40% top",
                end: "50% top"              
            }
        })
        section5.to(orbitC.current.object.position,{x: -1.791, y: 1.22, z: 0.919,ease:'none'},0)
        section5.to(orbitC.current.target,{x: -1.165, y: 0.972, z: -0.01,ease:'none'},0)
        section5.to(orbitC.current.object.position,{x: -2.256, y: 1.148, z: 0.183,ease:'none'},0.5)
        section5.to(orbitC.current.object.position,{x: -1.955, y: 1.14, z: -0.442,ease:'none'},1)
        section5.to(orbitC.current.target,{x: -1.619, y: 0.991, z: 0.42,  ease:'none'},1)

    }

    const section6Animation = ()=>{
        const section6= new gsap.timeline({
            scrollTrigger: {
                trigger: ".container",
                scrub: true,
                start: "50% top",
                end: "60% top"              
            }
        })

        section6.to(orbitC.current.object.position,{x: -1.703, y: 1.858, z: -0.819,ease:'none'},0)
        section6.to(orbitC.current.target,{x: -1.508, y: 1.435, z: 0.439,ease:'none'},0)
        section6.to(suspension.current.position,{x : -0.10146 , y: -0.33934},0.5)         
        section6.to(suspension.current.position,{x : -0.078, y: -0.26305 },1)
    }

    const section7Animation = ()=>{
        const section7= new gsap.timeline({
            scrollTrigger: {
                trigger: ".container",
                scrub: true,
                start: "60% top",
                end: "70% top"              
            }
        })

        section7.to(orbitC.current.object.position,{x: -1.973, y: 2.887, z: -0.376,ease:'none'},0)
        section7.to(orbitC.current.target,{x: -1.339, y: 2.221, z: 0.989,ease:'none'},0)
        section7.to(lightMaterial.color,{r : 35, g : 35, b : 35},0.5)
    }

    const section9Animation = ()=>{
        const section9= new gsap.timeline({
            scrollTrigger: {
                trigger: ".container",
                scrub: true,
                start: "80% top",
                end: "100% bottom"              
            }
        })

        section9.to(orbitC.current.object.position,{x: 0.834, y: 4.748, z: -3.128, ease:'none'},0)
        section9.to(orbitC.current.target,{x: -2.445, y: 1.905, z: 2.25, ease:'none'},0)
        section9.to(fullBike.current.rotation,{z : Math.PI * 0.4, ease:'none'},0)
        section9.to(fullBike.current.position,{y :2.48, ease:'none'},0)
        section9.to(pedals.current.children[0].rotation,{z : -Math.PI * 2.4, ease:'none'},0)
        section9.to(pedals.current.children[1].rotation,{z : -Math.PI * 2.4, ease:'none'},0)
        section9.to(backBike.current.rotation,{z : -Math.PI, ease:'none'},0.08)
        section9.to(wheel.current.rotation,{z : Math.PI * 2, ease:'none'},0.08)
        section9.to(wheelColor.current.rotation,{z : Math.PI * 2, ease:'none'},0.08)
        section9.to(crutch.current.rotation,{z : -Math.PI * 0.6, ease:'none'},0.6)
        section9.to(orbitC.current.object.position,{x: 0.652, y: 2.618, z: -2.331,ease:'none'},0.6)
        section9.to(orbitC.current.target,{x: -2.325, y: 0.788, z: 0.997, ease:'none'},0.6)
        section9.to(fullBike.current.rotation,{z : -Math.PI *0.05, ease:'none'},0.6)
        section9.to(fullBike.current.position,{y :-0.3, ease:'none'},0.6)
        section9.to(pedals.current.children[0].rotation,{z : -Math.PI * 1.95, ease:'none'},0.6)
        section9.to(pedals.current.children[1].rotation,{z : -Math.PI * 1.95, ease:'none'},0.6)
    }

}