import { CallToAction } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'
import useSWR from 'swr'
import TeamContainer from './teamContainer';

const fetcher = (url) => fetch(url).then((res) => res.json())


const CompRanks = (props) => {

    const urlFill = props.floor ? (`-${props.floor}-${props.firstHalf ? 1 : 2}`) : ''
    //console.log(urlFill)

    //console.log(`https://spiralabyss.s3.amazonaws.com/${props.phase}${urlFill}.json`)

    const { data, error } = useSWR(`https://spiralabyss.s3.amazonaws.com/${props.phase}${urlFill}.json`, fetcher)

    const phaseName = props.phase.toUpperCase().replace(/_/g, ' ')

    let [numTeams, setNumTeams] = useState(10);

    let checkNames = (comp, char) => {
        if (char.name === "None") return true
        if (comp.char_one === char.name) return (true)
        if (comp.char_two === char.name) return (true)
        if (comp.char_three === char.name) return (true)
        if (comp.char_four === char.name) return (true)
        return false
    }

    // filter by dropdown selectors
    let checkSelected = (comp) => {
        if (!checkNames(comp, props.chars.first)) return (false)
        if (!checkNames(comp, props.chars.second)) return (false)
        if (!checkNames(comp, props.chars.third)) return (false)
        if (!checkNames(comp, props.chars.fourth)) return (false)
        return true
    }

    // filter by checkboxes
    let checkFilter = (comp) => {
        if (!props.checked[comp.char_one]) {
            // console.log(comp.char_one)
            return false
        }
        if (!props.checked[comp.char_two]) {
            // console.log(comp.char_two)
            return false
        }
        if (!props.checked[comp.char_three]) {
            // console.log(comp.char_three)
            return false
        }    
        if (!props.checked[comp.char_four]) {
            // console.log(comp.char_four)
            return false
        }
        return true
    }
    
    // console.log(props.checked)
    {/** speeding up loadtime with filter */}
    let comps = []
    if(data) {
        comps = data.slice(0, numTeams)
                .filter(comp => comp.usage_rate > 1)
                .filter(comp => !props.filterComps || checkSelected(comp))
                .filter(comp => !props.filterComps || checkFilter(comp))
    }

    return (
        <div className={"flex flex-col bg-menu-gray p-4 border-white border-opacity-50 border-4 rounded-lg"}>
                <div className='flex justify-center text-center text-white font-bold font-serif text-xl'>
                    {phaseName} {props.floor ? `CHAMBER ${props.floor}-${props.firstHalf ? 1 : 2}` : 'ALL CHAMBERS'} POPULAR COMPS
                </div>
                
                
                { !error ?
                    data ?
                        comps.map((comp, index) =>  
                            <TeamContainer key={index} 
                            c1={comp.char_one} c2={comp.char_two} 
                            c3={comp.char_three} c4={comp.char_four} 
                            rank={index+1} usage={comp.usage_rate} /> 
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