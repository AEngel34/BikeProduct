import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger"
import ScrollSmoother from "gsap/ScrollSmoother"
gsap.registerPlugin(ScrollSmoother,ScrollTrigger)
import { greenMaterial,lightMaterial,blackMaterial } from './Materials.js'

let tl1,tl2,tl3,tl4,tl5,tl6,tl7,tl8,tl9
let tl1Text,tl2Text,tl3Text,tl4Text,tl5Text,tl6Text,tl7Text,tl8Text,tl9Text
let tlArray = [], tlTextArray = []
let smoother 

export const initTrigger = (smoothValue,speed)=>{
    smoother = ScrollSmoother.create({
        smooth : smoothValue,
        speed : speed
    })
    ScrollTrigger.normalizeScroll(true)
    ScrollTrigger.refresh()
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
    .to(storageClosure.current.position,{x : 0.046445, y : 1.4081},0.5)

    tlArray.push(tl3)
}

export const section4Animation = (orbitC,position,position1,target,storageClosure,battery)=>{
    tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".container", scrub: true,               
            start: "30% top", end: "45% top" 
        }
    })
    .to(storageClosure.current.position,{x : -0.322391, y : 1.57526, ease:'none'},0)
    .to(orbitC.current.object.position,{x: position.x, y: position.y, z: position.z,ease:'none'},0)
    .to(orbitC.current.object.position,{x: position1.x, y: position1.y, z: position1.z,ease:'none',duration : 1},0.5)
    .to(orbitC.current.target,{x: target.x, y: target.y, z: target.z, ease:'none',duration : 1},0.5)
    .to(battery.current.position,{x : -0.302424 , y : 2.2387 , ease:'none'},1.5)
    .to(battery.current.position,{x : -0.318405, y : 2.02922, ease:'none'},2)
    .to(greenMaterial.color,{r : 1.4, g : 0.3, ease : 'none'},2.5)

    tlArray.push(tl4)
}

export const section5Animation = (orbitC,position,position1,target)=>{
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
    .to(fullBike.current.position,{y : 2.48, ease:'none',duration: 2},0)
    .to(pedals.current.children[0].rotation,{z : -Math.PI * 2.4, ease:'none',duration: 2},0)
    .to(pedals.current.children[1].rotation,{z : -Math.PI * 2.4, ease:'none',duration: 2},0)
    .to(backBike.current.rotation,{z : -Math.PI, ease:'none',duration: 2},.31)
    .to(wheel.current.rotation,{z : Math.PI * 2, ease:'none',duration: 2},.31)
    .to(wheelColor.current.rotation,{z : Math.PI * 2, ease:'none',duration: 2},.31)
    .to(crutch.current.rotation,{z : -Math.PI * 0.6, ease:'none',duration: 1},2.31)
    .to(orbitC.current.object.position,{x: position1.x, y: position1.y, z: position1.z,ease:'none',duration: 1},2.31)
    .to(orbitC.current.target,{x: target1.x, y: target1.y, z: target1.z, ease:'none',duration: 1},2.31)
    .to(fullBike.current.rotation,{z : -Math.PI * 0.05, ease:'none',duration: 1},2.31)
    .to(fullBike.current.position,{y : -0.3, ease:'none',duration: 1},2.31)
    .to(pedals.current.children[0].rotation,{z : -Math.PI * 1.95, ease:'none',duration: 1},2.31)
    .to(pedals.current.children[1].rotation,{z : -Math.PI * 1.95, ease:'none',duration: 1},2.31)

    tlArray.push(tl9)
    ScrollTrigger.refresh()
}

export const titleTextAnimation = (sectionTitle)=>{
    tl1Text = gsap.timeline({
        scrollTrigger: {
          trigger: ".container",scrub: true,              
          start: "0% top",end: "3% top",              
        }
      }).to(sectionTitle.map((ref) => ref.current),{ fillOpacity: 0 },0)
      .to('.scrollIndication',{opacity : 0},0)  
      .to('.fakeMenu',{opacity : 0},0)  
      
      tlTextArray.push(tl1Text)
}

export const section1TextAnimation = (section1)=>{
    tl2Text = gsap.timeline({
        scrollTrigger: {
            trigger: ".container", scrub: true,               
            start: "3% top", end: "18% top",               
        }
    })
    .to(section1[0].current,{fillOpacity : 1,duration : 1,ease:'none'},0)
    .to(section1[1].current,{fillOpacity : 1,duration : 1,ease:'none'},0.3)
    .to(section1[2].current,{fillOpacity : 1,duration : 1,ease:'none'},0.6)
    .to(section1[3].current,{fillOpacity : 1,duration : 1,ease:'none'},0.6)
    .to(section1[4].current,{fillOpacity : 1,duration : 1,ease:'none'},1.1)
    .to(section1[5].current,{fillOpacity : 1,duration : 1,ease:'none'},1.6)
    .to(section1.map((ref)=> ref.current),{fillOpacity : 0, ease : 'none'},2.3) 
    
    tlTextArray.push(tl2Text)
}

export const section2TextAnimation = (section2)=>{
    tl3Text = gsap.timeline({
        scrollTrigger: {
            trigger: ".container", scrub: true,               
            start: "17% top", end: "23% top",              
        }
    })
    .to(section2[0].current,{fillOpacity : 1,ease:'none',duration : 2},1)
    .to(section2[1].current,{fillOpacity : 1,ease:'none',duration : 2},1.5)
    .to(section2[2].current,{fillOpacity : 1,ease:'none',duration : 2},2)
    .to(section2[3].current,{fillOpacity : 1,ease:'none',duration : 2},2.5)
    .to(section2[4].current,{fillOpacity : 1,ease:'none',duration : 2},3)
    .to(section2[5].current,{fillOpacity : 1,ease:'none',duration : 2},3.5)
    .to(section2[6].current,{fillOpacity : 1,ease:'none',duration : 2},4)
    .to(section2[0].current.position,{z : -1.09,ease:'none',duration : 2},0.5)
    .to(section2[1].current.position,{z : -1.095,ease:'none',duration : 2},1)
    .to(section2[2].current.position,{z : -1.099,ease:'none',duration : 2},1.5)
    .to(section2[3].current.position,{z : -1.1,ease:'none',duration : 2},2)
    .to(section2[4].current.position,{z : -1.107,ease:'none',duration : 2},2.5)
    .to(section2[5].current.position,{z : -1.107,ease:'none',duration : 2},3)
    .to(section2[6].current.position,{z : -1.11,ease:'none',duration : 2},3.5)
    .to(section2.map((ref)=>ref.current),{fillOpacity : 0,ease:'none',duration : 2},5)

    tlTextArray.push(tl3Text)
}

export const section3TextAnimation = (section3,text1Pos,text2Pos)=>{
    tl4Text = gsap.timeline({
        scrollTrigger: {
            trigger: ".container", scrub: true,               
            start: "26% top", end: "30% top"               
        }
    })
    .to(section3.map((ref)=>ref.current),{fillOpacity : 1,duration : 1.5,ease:'none'},0.5)
    .to(section3[0].current.position,{x : text1Pos.x, z : text1Pos.z,duration : 1.5,ease:'none'},0)
    .to(section3[1].current.position,{x : text2Pos.x, z : text2Pos.z,duration : 1.5,ease:'none'},0) 
    .to(section3.map((ref)=>ref.current),{fillOpacity : 0, ease : 'none'},1.5)  
    
    tlTextArray.push(tl4Text)
}

export const section4TextAnimation = (section4)=>{
    tl5Text = gsap.timeline({
        scrollTrigger: {
            trigger: ".container", scrub: true,               
            start: "37.5% top", end: "42.5% top",               
        }
    })
    .to(section4[0].current.position,{x : -0.28, y : 2.21,duration : 1,ease:'none'},0)
    .to(section4[0].current.position,{x : -0.3, y : 2,duration : 1,ease:'none'},1)
    
    gsap.timeline({
        scrollTrigger: {
            trigger: ".container", scrub: true,               
            start: "42.5% top", end: "46% top"               
        }
    })
    .to(section4[1].current,{fillOpacity : 1,ease:'none'},0)
    .to(section4.map((ref)=> ref.current),{fillOpacity : 0, ease : 'none'},1)

    tlTextArray.push(tl5Text)
}

export const section5And6TextAnimation = (section5,section6, sizes,text1,text2)=>{
    tl6Text = gsap.timeline({
        scrollTrigger: {
            trigger: ".container", scrub: true,               
            start: "53% top", end: "68% top"               
        }
    })
   .to(section5[0].current,{fillOpacity : 1,ease: 'none'},0)
   .to(section5[1].current,{fillOpacity : 1,ease: 'none'},0.2)
   .to(section5[2].current,{fillOpacity : 1,ease: 'none'},0.4)
   .to(section5[3].current,{fillOpacity : 1,ease: 'none'},0.6)
   .to(section5[0].current,{fontSize : sizes.a,ease: 'none'},0.2)
   .to(section5[1].current,{fontSize : sizes.b,ease: 'none'},0.4)
   .to(section5[2].current,{fontSize : sizes.c,ease: 'none'},0.6)
   .to(section5[3].current,{fontSize : sizes.d,ease: 'none'},0.8)
   .to(section5.map((ref)=> ref.current),{fillOpacity : 0, ease : 'none'},1.2)
   .to(section6[0].current,{fillOpacity : 1,ease: 'none',duration : 2},2.8)
   .to(section6[1].current,{fillOpacity : 1,ease: 'none',duration : 2},3.1)
   .to(section6[0].current.position,{x : text1.x ,z : text1.z,ease: 'none',duration : 2},2.6)
   .to(section6[1].current.position,{x: text2.x, z:text2.z,ease: 'none',duration : 2},2.9)
   .to(section6.map((ref)=> ref.current),{fillOpacity : 0, ease: 'none'},4.9)

   tlTextArray.push(tl6Text)
}


export const section7TextAnimation= (section7)=>{
    tl7Text = gsap.timeline({
        scrollTrigger: {
            trigger: ".container", scrub: true,               
            start: "74.5% top", end: "77% top"               
        }
    })
    .to(section7.map((ref)=>ref.current),{fillOpacity : 1,ease: 'none', duration : 3},0)
    .to(blackMaterial.color,{r : 2, g : 2 , b : 2, ease:'none',duration : 3},0)
    .to(section7.map((ref)=>ref.current),{fillOpacity : 0},5)

    tlTextArray.push(tl7Text)
}

export const section8TextAnimation= (section8)=>{
    tl8Text = gsap.timeline({
        scrollTrigger: {
            trigger: ".container", scrub: true,               
            start: "83% top", end: "87% top",                
        }
    })
    .to(section8.map((ref)=>ref.current),{fillOpacity : 1,duration : 9,ease:'none'},0)
    .to(section8.map((ref)=>ref.current),{fillOpacity : 0,duration : 3,ease:'none'},9)

    tlTextArray.push(tl8Text)
}

export const section9TextAnimation= (section9)=>{
    tl9Text = gsap.timeline({
        scrollTrigger: {
            trigger: ".container", scrub: true,               
            start: "90% top", end: "100% bottom",
        }
    })
    .to(section9[0].current,{fillOpacity : 1,ease: 'none',duration : 1.5},1.5)
    .to(section9[0].current,{fillOpacity : 0,ease: 'none',duration : .5},3.5)
    .to(section9[1].current,{fillOpacity : 1,ease: 'none',duration : 1},7)
    .to(section9[2].current,{fillOpacity : 1,ease: 'none',duration : 1},7)
    .to(section9[3].current,{fillOpacity : 1,ease: 'none',duration : 1},7)
    .to(section9[4].current,{fillOpacity : 1,ease: 'none',duration : 1},7)
    .to(section9[5].current,{fillOpacity : 1,ease: 'none',duration : 1},8) 
    
    tlTextArray.push(tl9Text)
    ScrollTrigger.refresh()
}

export const clearTimeline = ()=>{
    tlArray.map((tl)=> {
        tl.progress(0)
        tl.clear()
    })

    smoother.kill()
    ScrollTrigger.killAll()
    tlArray = []
}

export const clearTextTimeline = ()=>{    
    tlTextArray.map((tl)=> {
        tl.progress(0)
        tl.clear()
    })

    tlTextArray = []
}