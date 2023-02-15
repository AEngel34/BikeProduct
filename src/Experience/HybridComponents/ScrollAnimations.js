import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger"
import ScrollSmoother from "gsap/ScrollSmoother"
gsap.registerPlugin(ScrollSmoother,ScrollTrigger)
import { greenMaterial,lightMaterial } from './Materials'

let tl1,tl2,tl3,tl4,tl5,tl6,tl7,tl8,tl9
let tlArray = []

export const initTrigger = ()=>{
    ScrollTrigger.normalizeScroll(true)
    ScrollSmoother.create({
        smooth : 3,
        effects: true
    })
}

export const setInitialPosition = (orbitC, position,target)=>{
    orbitC.current.object.position.x = position.x
    orbitC.current.object.position.y = position.y
    orbitC.current.object.position.z = position.z
    orbitC.current.target.x = target.x
    orbitC.current.target.y = target.y
    orbitC.current.target.z = target.z
}

export const section1Animation = (pedals,orbitC,position,target)=>{    

    tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".container", scrub: true,               
            start: "top top", end: "10% top"                             
        }
    })
    .to(pedals.current.rotation,{z : Math.PI * 2},0)   
    .to(pedals.current.children[0].rotation,{z : -Math.PI * 2},0) 
    .to(pedals.current.children[1].rotation,{z : -Math.PI * 2},0)           
    .to(orbitC.current.object.position,{x: position.x, y: position.y, z: position.z,ease:'none'},0) 
    .to(orbitC.current.target,{x: target.x, y: target.y, z: target.z,ease:'none'},0)    
    
    tlArray.push(tl1)
}

export const section2Animation = (orbitC,position,target)=>{
    tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".container", scrub: true,               
            start: "10% top", end: "18% top"                             
        }
    })
    .to(orbitC.current.object.position,{x: position.x, y: position.y, z: position.z,ease:'none'},0)
    .to(orbitC.current.target,{x: target.x, y: target.y, z: target.z,ease:'none'},0)

    tlArray.push(tl2)
}

export const section3Animation = (orbitC,position,target,storageClosure)=>{
    tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".container", scrub: true,               
            start: "23% top", end: "30% top"                       
        }
    })
    .to(orbitC.current.object.position,{x: position.x, y: position.y, z: position.z,ease:'none'},0)
    .to(orbitC.current.target,{x: target.x, y: target.y, z: target.z, ease:'none'},0)
    .to(storageClosure.current.position,{x : 0.046445 , y :1.4081},0.5)

    tlArray.push(tl3)
}

export const section4Animation = (orbitC,position,position1,target,storageClosure,battery)=>{
    tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".container", scrub: true,               
            start: "30% top", end: "45% top" 
        }
    })
    .to(storageClosure.current.position,{x :-0.322391, y :1.57526, ease:'none'},0)
    .to(orbitC.current.object.position,{x: position.x, y: position.y, z: position.z,ease:'none'},0)
    .to(orbitC.current.object.position,{x: position1.x, y: position1.y, z: position1.z,ease:'none',duration : 1},0.5)
    .to(orbitC.current.target,{x: target.x, y: target.y, z: target.z, ease:'none',duration : 1},0.5)
    .to(battery.current.position,{x : -0.302424 , y : 2.2387 , ease:'none'},1.5)
    .to(battery.current.position,{x : -0.318405, y : 2.02922, ease:'none'},2)
    .to(greenMaterial.color,{r : 1.4, g : 0.3, ease : 'none'},2.5)

    tlArray.push(tl4)
}

export  const section5Animation = (orbitC,position,position1,target)=>{
    tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: ".container", scrub: true,               
            start: "45% top", end: "54% top"                             
        }
    })
    .to(orbitC.current.object.position,{x: position.x, y: position.y, z: position.z,ease:'none',duration : 0.8},0)
    .to(orbitC.current.object.position,{x: position1.x, y: position1.y, z: position1.z,ease:'none',duration : 1.2},0.8)
    .to(orbitC.current.target,{x: target.x, y: target.y, z: target.z, ease:'none',duration : 1.2},0.8)

    tlArray.push(tl5)
}

export const section6Animation = (orbitC,position,target,suspension)=>{
    tl6 = gsap.timeline({
        scrollTrigger: {
            trigger: ".container", scrub: true,               
            start: "58.5% top", end: "68% top"                             
        }
    })
    .to(orbitC.current.object.position,{x: position.x, y: position.y, z: position.z,ease:'none',duration : 1.3},0)
    .to(orbitC.current.target,{x: target.x, y: target.y, z: target.z,ease:'none',duration : 1.3},0)
    .to(suspension.current.position,{x : -0.10146 , y: -0.33934,ease:'none'},1.3)         
    .to(suspension.current.position,{x : -0.078, y: -0.26305,ease:'none' },1.8)

    tlArray.push(tl6)
}

export const section7Animation = (orbitC,position,target)=>{
    tl7 = gsap.timeline({
        scrollTrigger: {
            trigger: ".container", scrub: true,               
            start: "68% top", end: "77% top"                             
        }
    })
    .to(orbitC.current.object.position,{x: position.x, y: position.y, z: position.z,ease:'none',duration : 1.3},0)
    .to(orbitC.current.target,{x: target.x, y: target.y, z: target.z,ease:'none',duration : 1.3},0)
    .to(lightMaterial.color,{r : 35, g : 35, b : 35,ease:'none'},1.3)

    tlArray.push(tl7)
}

export const section8Animation = (orbitC,position,target)=>{
    tl8 = gsap.timeline({
        scrollTrigger: {
            trigger: ".container", scrub: true,               
            start: "77% top", end: "83% top"                             
        }
    })
    .to(orbitC.current.target,{x: target.x, y: target.y, z: target.z, ease:'none'},0)
    .to(orbitC.current.object.position,{x: position.x, y: position.y, z: position.z,ease:'none'},0)

    tlArray.push(tl8)
}

export const section9Animation = (orbitC,position,target,fullBike,pedals,backBike,wheel,wheelColor,crutch,position1,target1)=>{
    tl9 = gsap.timeline({
        scrollTrigger: {
            trigger: ".container", scrub: true,               
            start: "87% top", end: "98% bottom"                             
        }
    })
    .to(orbitC.current.object.position,{x: position.x, y: position.y, z: position.z, ease:'none',duration: 2},0)
    .to(orbitC.current.target,{x: target.x, y: target.y, z: target.z, ease:'none',duration: 2},0)
    .to(fullBike.current.rotation,{z : Math.PI * 0.4, ease:'none',duration: 2},0)
    .to(fullBike.current.position,{y :2.48, ease:'none',duration: 2},0)
    .to(pedals.current.children[0].rotation,{z : -Math.PI * 2.4, ease:'none',duration: 2},0)
    .to(pedals.current.children[1].rotation,{z : -Math.PI * 2.4, ease:'none',duration: 2},0)
    .to(backBike.current.rotation,{z : -Math.PI, ease:'none',duration: 2},.31)
    .to(wheel.current.rotation,{z : Math.PI * 2, ease:'none',duration: 2},.31)
    .to(wheelColor.current.rotation,{z : Math.PI * 2, ease:'none',duration: 2},.31)
    .to(crutch.current.rotation,{z : -Math.PI * 0.6, ease:'none',duration: 1},2.31)
    .to(orbitC.current.object.position,{x: position1.x, y: position1.y, z: position1.z,ease:'none',duration: 1},2.31)
    .to(orbitC.current.target,{x: target1.x, y: target1.y, z: target1.z, ease:'none',duration: 1},2.31)
    .to(fullBike.current.rotation,{z : -Math.PI *0.05, ease:'none',duration: 1},2.31)
    .to(fullBike.current.position,{y :-0.3, ease:'none',duration: 1},2.31)
    .to(pedals.current.children[0].rotation,{z : -Math.PI * 1.95, ease:'none',duration: 1},2.31)
    .to(pedals.current.children[1].rotation,{z : -Math.PI * 1.95, ease:'none',duration: 1},2.31)

    tlArray.push(tl9)
}

export const clearTimeline = ()=>{
    tlArray.map((tl)=> {
        tl.progress(0)
        tl.clear()
    })
    ScrollTrigger.killAll()
}