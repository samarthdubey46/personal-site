import React from 'react'
import Template from '../template'
import Data, { Langauges } from './data'

const Blogs = () => {
    return (
        <Template data={Data} options={Langauges}/>
    )
}
export default Blogs
