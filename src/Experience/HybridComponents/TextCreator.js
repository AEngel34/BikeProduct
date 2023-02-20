import { Text } from "@react-three/drei"
import { baseTextMaterial } from "./Materials.js"

const cinzel = './font/Cinzel-VariableFont_wght.ttf'

export const createNewText = (ref,rotation,position,fontSize,text,maxWidth,textAlign,opacity,material,lineHeight)=>{

    material === undefined ? material = baseTextMaterial : 0
    opacity === undefined ? opacity = 0 : 0
    textAlign === undefined ? textAlign = 'center' : 0
    maxWidth === undefined ? maxWidth = 50 : 0
    lineHeight === undefined ? lineHeight = "normal" : 0

    return <Text ref ={ref} 
        rotation={rotation} position={position}           
        fontSize={fontSize} font={cinzel}
        material={material} lineHeight = {lineHeight}           
        maxWidth={maxWidth} textAlign={textAlign} fillOpacity={opacity} outlineOpacity={0}           
    >
        {text}
    </Text>
}
