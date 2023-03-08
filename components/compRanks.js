import { CallToAction } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'
import useSWR from 'swr'
import TeamContainer from './teamContainer';
import { useRecoilState } from 'recoil';
import { phaseNameState, includedCharactersState } from '../data/recoil/atoms';

const fetcher = (url) => fetch(url).then((res) => res.json())


const CompRanks = ({floor, isFirstHalf, isFilterActive, checked}) => {
    const [phaseName] = useRecoilState(phaseNameState);
    const [includedCharacters]= useRecoilState(includedCharactersState);
    console.log("compRanks", includedCharacters)


    const urlFill = floor ? (`-${floor}-${isFirstHalf ? 2 : 1}`) : ''
    // console.log(urlFill)
    // console.log(props)
    // console.log(`https://spiralabyss.s3.amazonaws.com/${props.phase}${urlFill}.json`)


    //TODO: load specific floor data dynamically when user hovers/clicks the corresponding button
    const { data, error } = useSWR(`https://spiralabyss.s3.amazonaws.com/${phaseName}${urlFill}.json`, fetcher)
    

    const normalizedPhaseName = phaseName.toUpperCase().replace(/_/g, ' ')

    let [numTeams, setNumTeams] = useState(10);

    // let checkNames = (comp, char) => {
    //     if (!char || char.name === "None") return true
    //     if (comp.char_one === char.name) return (true)
    //     if (comp.char_two === char.name) return (true)
    //     if (comp.char_three === char.name) return (true)
    //     if (comp.char_four === char.name) return (true)
    //     return false
    // }

    // // filter by dropdown selectors
    // let checkSelected = (comp) => {
    //     if (!checkNames(comp, includedCharacters.first)) return (false)
    //     if (!checkNames(comp, includedCharacters.second)) return (false)
    //     if (!checkNames(comp, includedCharacters.third)) return (false)
    //     if (!checkNames(comp, includedCharacters.fourth)) return (false)
    //     return true
    // }
    
    const checkIncluded = (comp) => {
        const included = [includedCharacters.firstCharacter, includedCharacters.secondCharacter, includedCharacters.thirdCharacter, includedCharacters.fourthCharacter]
        const compCharacters = [comp.char_one, comp.char_two, comp.char_three, comp.char_four];
        console.log(included, compCharacters)

        return included.every(includedChar=>(!includedChar || includedChar.name === "None")
         || compCharacters.find(compChar=>compChar===includedChar.name)
         )
    }

    //TODO: replace with excluded
    // filter by checkboxes
    let checkFilter = (comp) => {
        if (!checked[comp.char_one]) console.log('missing: ' + comp.char_one)
        if (!checked[comp.char_two]) console.log('missing: ' + comp.char_two)
        if (!checked[comp.char_three]) console.log('missing: ' + comp.char_three)
        if (!checked[comp.char_four]) console.log('missing: ' + comp.char_four)

        if (!checked[comp.char_one]) {
            // console.log(comp.char_one)
            return false
        }
        if (!checked[comp.char_two]) {
            // console.log(comp.char_two)
            return false
        }
        if (!checked[comp.char_three]) {
            // console.log(comp.char_three)
            return false
        }    
        if (!checked[comp.char_four]) {
            // console.log(comp.char_four)
            return false
        }
        return true
    }
    
    // console.log(checked)
    {/** speeding up loadtime with filter */}
    let comps = [];
    if(data) {
        console.log(data.slice(0, numTeams)
        .filter(comp => comp.usage_rate > 1)
        .filter(comp => !isFilterActive || checkIncluded(comp))
        )
        comps = data.slice(0, numTeams)
                .filter(comp => comp.usage_rate > 1)
                .filter(comp => !isFilterActive || checkIncluded(comp))
                .filter(comp => !isFilterActive || checkFilter(comp))
        console.log(comps)
    } else {
        console.log('honestly idk')
    }


    return (
        <div className={"flex flex-col bg-menu-gray p-4 border-white border-opacity-50 border-4 rounded-lg"}>
                <div className='flex justify-center text-center text-white font-bold font-serif text-xl'>
                    {normalizedPhaseName} {floor ? `CHAMBER ${floor}-${isFirstHalf ? 2 : 1}` : 'ALL CHAMBERS'} POPULAR COMPS
                </div>
                
                
                { !error ?
                    data ?
                        comps.map((comp, index) =>  
                            <TeamContainer key={index} 
                            c1={comp.char_one} c2={comp.char_two} 
                            c3={comp.char_three} c4={comp.char_four} 
                            rank={comp.rank} usage={comp.usage_rate} /> 
                        )
                        :
                        <></>
                    :
                    <></>
                }
                { !error ?
                    data ?
                        (numTeams < data.length) ? <div className="flex items-center justify-center pt-2">
                            <button className="border-opacity-50 p-2 rounded-md text-white border-white border-2 text-opacity-50 hover:bg-black" onClick={()=>{setNumTeams(numTeams+10)}}>
                                Load More
                            </button> 
                        </div> : <></>
                        :
                        <></>
                    :
                    <></>
                }
                
        </div>
    )
}

export default CompRanks