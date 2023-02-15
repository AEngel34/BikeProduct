import { MeshStandardMaterial,DoubleSide,Color } from 'three'

export const baseMaterial = new MeshStandardMaterial({
  color : 0x020202, emissiveIntensity : 0,
  roughness : 0.2, metalness : 0.2,envMapIntensity :3, side : DoubleSide
})
  
export  const blackMetalMaterial = new MeshStandardMaterial({
  color : 0x101010, emissiveIntensity : 0,
  roughness : 0, metalness : .8 , envMapIntensity : 3
})
  
export  const plasticBlackMaterial = new MeshStandardMaterial({
  color : 0x000000, metalness : 0, emissiveIntensity : 0, envMapIntensity : 3,
  roughness : 1
})
export const colorMaterial = new MeshStandardMaterial({color : new Color(0,1,1.5) , toneMapped: false})
export const redMaterial = new MeshStandardMaterial({color : new Color(3,0,0), toneMapped: false})
export const greenMaterial = new MeshStandardMaterial({color : new Color(0,1.5,0), toneMapped : false})
export const aluMaterial = new MeshStandardMaterial({color : 0xaaaaaa, roughness : 0.1,metalness : 1,envMapIntensity:3})
export const lightMaterial = new MeshStandardMaterial({color : new Color(0,0,0), emissiveIntensity : 0, toneMapped : false})
export const baseTextMaterial = new MeshStandardMaterial({color : new Color(0,1,1.2), envMapIntensity : 5, metalness : 1, roughness : 0})
export const blackMaterial = new MeshStandardMaterial({color : new Color(0,0,0), envMapIntensity : 5, metalness : 1, roughness : 0})