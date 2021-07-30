import React, { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { FormGroup, FormControlLabel, Checkbox, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { useHeroes } from '../data/typedMock'
import { CheckBox } from '@material-ui/icons';

const CharacterCheckbox = withStyles({
    root: {
      color: "white",
      '&$checked': {
        color: "white",
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

const CharacterFilter = (props) => {

    const heroesList = useHeroes();

    const [search, setSearch] = useState('')

    useEffect(() => {console.log(props.checked)},[props.checked])

    const clear = () => {
        props.setChecked(props.heroesList.reduce((builderDict,currItem) => ({...builderDict, [currItem.name]: false}), {}))
    }

    const reset = () => {
        props.setChecked(props.heroesDict)
    }

    const handleChange = (event) => {
        props.setChecked({ ...props.checked, [event.target.name]: event.target.checked })
    }

    return (
        <div className='w-full flex flex-col gap-2 text-white'>
                <div className="grid grid-rows-2 md:flex md:flex-row pb-2 flex-wrap md:flex-nowrap justify-evenly border-color-white border-b-2 divide-x-2 divide-white">
                    <div className="pr-2 w-full"><TextField label="Search Hero" onInput={e => setSearch(e.target.value)} className='w-full'/></div>
                    <button onClick={clear} className="bg-opacity-40 transition duration-100 hover:bg-white hover:bg-opacity-40"><div className="w-max p-3 transition duration-100 transform hover:scale-110">Unselect All</div></button>
                    <button onClick={reset} className="bg-opacity-40 transition duration-100 hover:bg-white hover:bg-opacity-40"><div className="w-max p-3 transition duration-100 transform hover:scale-110">Reset</div></button>
                </div>
                <div className="flex flex-col overflow-y-scroll scrollbar scrollbar-thumb-rounded-lg scrollbar-thumb-h-1/3 scrollbar-track-gray-300 scrollbar-track-rounded-full scrollbar-thumb-white max-h-52">
                    <FormGroup>
                        {heroesList.filter( (hero) => !search || hero.name.toLowerCase().includes(search.toLowerCase()) ).map((hero, index) => 
                            <div className="pl-4">
                                <FormControlLabel
                                    control={<CharacterCheckbox name={hero.name} checked={props.checked[hero.name]} color="white" onChange={handleChange}/>}
                                    label={hero.name}
                                    key={index}
                                />
                            </div>
                        )}
                    </FormGroup>
                </div>
        </div>
    )
}

export default CharacterFilter