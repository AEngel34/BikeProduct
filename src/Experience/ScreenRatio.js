import {useState, useEffect} from 'react'
import ScrollDesktop from "./ScrollDesktop.js"
import InterfaceDesktop from "./InterfaceDesktop.js"
import ScrollMobile from './ScrollMobile.js'
import InterfaceMobile from './InterfaceMobile.js'

export default function ScreenRatio({orbitC,fullBike, pedals, storageClosure, battery, backBike,crutch,wheel,wheelColor,suspension, lightMaterial,greenMaterial}){

    const [aspectRatio, setAspectRatio] = useState(window.innerHeight / window.innerWidth)
    
    useEffect(() => {
        const handleResize = ()=>{
            setAspectRatio(window.innerHeight / window.innerWidth)
        }
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    },[])

    return(
        <>
        {aspectRatio <= 0.5 ? 
            <ScrollDesktop 
                orbitC={orbitC}
                fullBike={fullBike}
                pedals={pedals}
                storageClosure = {storageClosure}
                battery = {battery}
                backBike = {backBike}
                crutch= {crutch}
                wheel={wheel}
                wheelColor = {wheelColor}
                suspension = {suspension}
                lightMaterial = {lightMaterial}
                greenMaterial ={greenMaterial}
            />
            : 
            <ScrollMobile/>
        }
        {aspectRatio <= 0.5 ? <InterfaceDesktop/> : <InterfaceMobile/>}   
        </>
    )
}