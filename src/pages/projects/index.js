import React from 'react'
import Template from '../template'
import Data, { Langauges } from './data'

const Projects = () => {
    return (
        <Template data={Data} options={Langauges}/>
    )
}
export default Projects
