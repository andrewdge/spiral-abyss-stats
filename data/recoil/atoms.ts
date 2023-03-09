import {atom} from "recoil"

export const allFloorsCompsState = atom({
    key:"allFloorsCompsState",
    default:[]
})

export const charactersState = atom({
    key:"charactersState",
    default:[]
})

const defaultCharacter={name:"None", element:"None", image:" "}
export const includedCharactersState = atom({
    key:"includedCharactersState",
    default: {
        firstCharacter: defaultCharacter,
        secondCharacter: defaultCharacter, 
        thirdCharacter: defaultCharacter,
        fourthCharacter: defaultCharacter
    }
})

export const excludedCharactersState = atom({
    key:"excludedCharactersState",
    default: []
})

export const fileState = atom({
    key:"fileState",
    default: null
})

export const phaseNameState = atom({
    key:"phaseNameState",
    default: ""
})







