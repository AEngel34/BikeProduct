import { createNewText } from "../HybridComponents/TextCreator.js"
import { useRef,useEffect } from "react"
import { blackMaterial,baseTextMaterial } from "../HybridComponents/Materials.js"
import { clearTextTimeline, section1TextAnimation,section2TextAnimation,section3TextAnimation,section4TextAnimation,section5And6TextAnimation,section7TextAnimation,section8TextAnimation,section9TextAnimation, titleTextAnimation } from "../HybridComponents/ScrollAnimations.js"

export default function InterfaceMobile(){

    const sectionRefs = {
        sectionTitle: Array.from({ length: 4 }, () => useRef()),
        section1: Array.from({ length: 6 }, () => useRef()),
        section2: Array.from({ length: 7 }, () => useRef()),
        section3: Array.from({ length: 2 }, () => useRef()),
        section4: Array.from({ length: 2 }, () => useRef()),
        section5: Array.from({ length: 4 }, () => useRef()),
        section6: Array.from({ length: 3 }, () => useRef()),
        section7: Array.from({ length: 3 }, () => useRef()),
        section8: Array.from({ length: 3 }, () => useRef()),
        section9: Array.from({ length: 6 }, () => useRef()),
    }

    useEffect(() => {

        titleTextAnimation(sectionRefs.sectionTitle)
        section1TextAnimation(sectionRefs.section1)
        section2TextAnimation(sectionRefs.section2)
        section3TextAnimation(sectionRefs.section3,{x : -0.7, z : 0.7},{x : -0.1, z : -0.07})
        section4TextAnimation(sectionRefs.section4)
        section5And6TextAnimation(sectionRefs.section5,sectionRefs.section6,{a : .09, b : .12, c : .0689, d : .09},{x : -2.1, z : .065},{x : -2.1, z : .065})
        section7TextAnimation(sectionRefs.section7)
        section8TextAnimation(sectionRefs.section8)
        section9TextAnimation(sectionRefs.section9)

        return ()=>{
            clearTextTimeline()
            console.log('cleanInterfMobile')
        }
      
    }, [])

    return(
        <>
            {/* TITLE */}
            {createNewText(sectionRefs.sectionTitle[0],[0.321,-2.28,0.24],[-0.2,4.8,0.98],0.25,'you would never have',Infinity,'center',1)}
            {createNewText(sectionRefs.sectionTitle[1],[0.321,-2.28,0.24],[-0.2,4.1,0.98],.75,'wanted',1,'center',1)}
            {createNewText(sectionRefs.sectionTitle[2],[0.321,-2.28,0.24],[-0.2,3.3,0.98],.74,'to move',5,'center',1)}      
            {createNewText(sectionRefs.sectionTitle[3],[0.321,-2.28,0.24],[-0.2,2.45,0.98],.77,'so much',5,'center',1)} 

            {/* SECTION1 */}
            {createNewText(sectionRefs.section1[0],[0,Math.PI * 1.12,0],[0.1,3.3,2.8],.2,'Be assisted in your effort with its powerful engine',3)}
            {createNewText(sectionRefs.section1[1],[0,Math.PI * 1.1,0],[0.1,2.7,2.8],.15,'starting & pedaling assistance')}
            {createNewText(sectionRefs.section1[3],[0,Math.PI,0],[-0.16,0.5,-0.01],.083,'manage the different driving')}
            {createNewText(sectionRefs.section1[2],[0,Math.PI,0],[-0.16,0.35,-0.01],.123,'modes with your app')}
            {createNewText(sectionRefs.section1[4],[0,Math.PI,0],[0.35,1.45,-0.01],.04,'regenerative braking recharges the battery during descent or deceleration',.41)}
            {createNewText(sectionRefs.section1[5],[-0.11, 3.14, 0],[-0.5,1.33,0],.05,'Keep a good grip with the non-slip pedals',.5)}  

            {/* SECTION2 */}
            {createNewText(sectionRefs.section2[0],[0,-Math.PI * 0.5,0],[-0.5,2.03,-2.09],.1,'made with',1)}
            {createNewText(sectionRefs.section2[1],[0,-Math.PI * 0.5,0],[-0.5,1.94,-2.095],.06,'environmentally')}
            {createNewText(sectionRefs.section2[2],[0,-Math.PI * 0.5,0],[-0.5,1.865,-2.099],.056,'friendly materials')}
            {createNewText(sectionRefs.section2[3],[0,-Math.PI * 0.5,0],[-0.5,1.7,-2.1],.08,'the lightness')}
            {createNewText(sectionRefs.section2[4],[0,-Math.PI * 0.5,0],[-0.5,1.62,-2.107],.043,'of carbon offers you an')}
            {createNewText(sectionRefs.section2[5],[0,-Math.PI * 0.5,0],[-0.5,1.55,-2.107],.045,'unprecedented driving')}
            {createNewText(sectionRefs.section2[6],[0,-Math.PI * 0.5,0],[-0.5,1.45,-2.11],.12,'comfort')}

            {/* SECTION 3 */}
            {createNewText(sectionRefs.section3[0],[.14,2.4,-0.105],[0.25,1.7,1.1],.06,'its large built-in storage space will allow',.6)}
            {createNewText(sectionRefs.section3[1],[0.5,2.5,-0.38],[-0.511,1.46,-0.448],.025,'you to safely store your personal items',.2)}

             {/* SECTION 4 */}
            {createNewText(sectionRefs.section4[0],[0,Math.PI,Math.PI * 0.027],[-0.3,2,0.04],.025,'its removable high-capacity battery guarantees a long period of use with each recharge',.5,'center',1)}
            {createNewText(sectionRefs.section4[1],[0,Math.PI,Math.PI * 0.01],[-0.25,2.25,0.1],.035,`don't be afraid to leave the battery on the bike when it is parked, secure it by locking it with your application`,.6)}
            
            {/* SECTION 5 */}
            {createNewText(sectionRefs.section5[0],[0,Math.PI * 0.6,0],[-0.8,1.45,-0.607],.000001,'ride safely')}
            {createNewText(sectionRefs.section5[1],[0,Math.PI * 0.61,0],[-2.4,1.3,-0.06],.000001,'handle the unexpected')}
            {createNewText(sectionRefs.section5[2],[0.15,Math.PI * 0.6,-0.14],[-1.8,0.6,-0.27],.000001,'with disc brakes that quickly stop')}
            {createNewText(sectionRefs.section5[3],[0.5,Math.PI * 0.6,-0.45],[-1,0.38,-0.538],.000001,'your momentum')} 
            
            {/* SECTION 6 */}
            {createNewText(sectionRefs.section6[0],[Math.PI,0.74,Math.PI],[-1,2.4,1],.06,'the impact of the shocks is reduced with its powerful suspensions',1,'center')}
            {createNewText(sectionRefs.section6[1],[Math.PI,0.74,Math.PI],[-3,2.14,-1],.06,'flexibility and height adjustable with the app',1,'center')}
            
            {/* SECTION 7 */}
            {createNewText(sectionRefs.section7[0],[.38,-2.70,.25],[-1.75,2.6,0.3],.061,'KEEP A CLEAR VIEW',10,'center',0,blackMaterial)}
            {createNewText(sectionRefs.section7[1],[.38,-2.70,.25],[-1.75,2.5,0.31],.045,'when traveling at night',.8,'center',0,blackMaterial)}
            {createNewText(sectionRefs.section7[2],[.38,-2.70,.25],[-1.75,2.4,0.32],.0355,'with integrated led headlights',.8,'center',0,blackMaterial)}

             {/* SECTION 8 */}
            {createNewText(sectionRefs.section8[1],[0.32,2.52,-0.185],[-1.16,2.52,0.4],.028,
                'the integrated GPS allows you to track your routes, record your routes and performances Wi-Fi connection is available for easy software and map updates',.52
            )}
            {createNewText(sectionRefs.section8[0],[0.09,2.52,-0.055],[-1.185,2.83,0.4],.03,'monitor your speed in real time on the touch screen',.5)}
            {createNewText(sectionRefs.section8[2],[0.44,2.58,-0.25],[-1.16,2.32,0.4],.025,'track your calories burned during your trip on your mobile application',.52)}

            {/* SECTION 9 */}
            {createNewText(sectionRefs.section9[0],[0.15,Math.PI * 0.845,-0.075],[-1.8,5.1,1.1],.4,'arrived at destination ?',3.1)}
            {createNewText(sectionRefs.section9[1],[.14,2.28,-0.115],[-0.49,4.3,0.6],.32,'FOLD AND STORE')}
            {createNewText(sectionRefs.section9[2],[.14,2.28,-0.113],[-0.49,3.9,0.6],.32,'your bike with a')}
            {createNewText(sectionRefs.section9[3],[.14,2.28,-0.105],[-0.49,3.5,0.6],.355,'disconcerting')}
            {createNewText(sectionRefs.section9[4],[.14,2.28,-0.098],[-0.49,3.2,0.6],.139,'ease, it would become almost invisible')}
            {createNewText(sectionRefs.section9[5],[.86,2.52,-0.58],[1.49,1.1,-1.3],.045,
                'this product is fictitious and is not available for sale, it has been thought and created in order to demonstrate the creativity'+
                ' development and 3D modeling skills of your next favorite creative developer you can contact him via this e-mail address : contact@aengel-dev.com',
                1.6,'center',0,baseTextMaterial,1.8
            )}
        </>
    )
}