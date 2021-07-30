import { useState } from 'react'
import { Switch } from '@headlessui/react'

const FilterSwitch = ({ filter, setFilter }) => {

  return (
    <Switch.Group>
        <Switch.Label className="mr-4 text-white">Filter Comps</Switch.Label>
        <Switch
        checked={filter}
        onChange={setFilter}
        className={`${filter ? 'bg-green-300' : 'bg-white bg-opacity-50'}
        relative inline-flex items-center h-6 rounded-full w-11`}
        >
        <span className="sr-only">Filter Comps</span>
        <span
            className={`${
            filter ? 'translate-x-6' : 'translate-x-1'
            } inline-block w-4 h-4 transform bg-white rounded-full`}
        />
        </Switch>
    </Switch.Group>
  )
}

export default FilterSwitch