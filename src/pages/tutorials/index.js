import React from 'react'
import Template from '../template'
import Data, { Langauges } from './data'

const Tutorials = () => {
    return (
        <Template data={Data} options={Langauges}/>
    )
}
export default Tutorials
