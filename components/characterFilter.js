import React, { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { FormGroup, FormControlLabel, Checkbox, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'
import heroes from "../data/heroes.json"
import { useRecoilState } from 'recoil';
import { excludedCharactersState } from '../data/recoil/atoms';

const CharacterCheckbox = withStyles({
    root: {
      color: "white",
      '&$checked': {
        color: "white",
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

const CharacterFilter = () => {

    const [excludedCharacters, setExcludedCharacters] = useRecoilState(excludedCharactersState);
    const [search, setSearch] = useState('')

    const clear = () => {
        setExcludedCharacters([]);
    }


    const handleChange = (event) => {
        const selected = event.target.name;
                console.log("handleChange", excludedCharacters)

        if (excludedCharacters.includes(selected)) {
                //removes selected character name from excluded
               setExcludedCharacters(excludedCharacters.filter(name=>name !== selected))
            }
            else  {
                 //adds selected character name to excluded
                setExcludedCharacters([...excludedCharacters, selected]);
            }
    }

    return (
        <div className='w-full flex flex-col gap-2 text-white'>
                <div className="grid grid-rows-2 md:flex md:flex-row pb-1 flex-wrap md:flex-nowrap justify-evenly border-color-white border-b-2 divide-x-2 divide-white">
                    <div className="pr-2 w-full"><TextField label="Search Character" onInput={e => setSearch(e.target.value)} className='w-full'/></div>
                    {/* <button onClick={clear} className="bg-opacity-40 transition duration-100 hover:bg-white hover:bg-opacity-40"><div className="w-max p-3 transition duration-100 transform hover:scale-110">Unselect All</div></button> */}
                    <button onClick={clear} className="bg-opacity-40 transition duration-100 hover:bg-white hover:bg-opacity-40"><div className="w-max p-3 transition duration-100 transform hover:scale-110">Clear</div></button>
                </div>
                <div className="flex flex-col overflow-y-scroll scrollbar scrollbar-thumb-rounded-lg scrollbar-thumb-h-1/3 scrollbar-track-gray-300 scrollbar-track-rounded-full scrollbar-thumb-white h-52 max-h-full">
                    <FormGroup>
                        {heroes.slice(1,heroes.length).filter( (hero) => !search || hero.name.toLowerCase().includes(search.toLowerCase()) ).map((hero) => 
                            <div className="pl-4" key={hero.name}>
                                <FormControlLabel
                                    control={<CharacterCheckbox name={hero.name} checked={excludedCharacters.includes(hero.name)} color="default" onChange={handleChange}/>}
                                    label={hero.name}
                                />
                            </div>
                        )}
                    </FormGroup>
                </div>
        </div>
    )
}

export default CharacterFilter