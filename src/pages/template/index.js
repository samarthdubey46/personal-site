import React, { useEffect, useState } from 'react'
import './style.css'
import { Form, InputGroup } from 'react-bootstrap'
import { BsSearch, BsCheckBox } from 'react-icons/bs'
import { IconContext } from 'react-icons'
import { CheckBox } from '../../components/checkbox'
import Blog_Component from '../../components/Blog_Component'

const CheckBoxWithLabel = ({ label, id, changeAddedFiltters }) => {
    const [Selected, changeSelected] = useState(false)
    const id_ = id
    useEffect(() => {
        if (Selected == true) {
            changeAddedFiltters(prev => {
                if (prev.includes(id) === false) {
                    return [...prev, id]
                }
                return prev
            })
        } else {
            changeAddedFiltters(prev => prev.filter(item => item !== id))
        }
    }, [Selected])
    return (
        <div style={{ display: 'flex', alignItems: 'center', }}>
            <input value={Selected} onClick={() => changeSelected(prev => !prev)} className="clicked_checkbox" type="checkbox" />
            <label className="check_label">{label}</label>
        </div>
    )
}


const Template = ({data,options}) => {
    const [AddedFiltters, changeAddedFiltters] = useState([])
    const [width,changeWidth] = useState(0)
    const [height,changeHeight] = useState(0)
    const changeWindowDimension = () => {
        changeWidth(window.innerWidth)
        changeHeight(window.innerHeight)
    }
    useEffect(() => {
        window.addEventListener('resize',changeWindowDimension)
        return () => {
            console.log("unmount")
            window.removeEventListener('resize',changeWindowDimension)
        }
    },[])
    const [Search, changeSearch] = useState(' ')
    const [Data, changeData] = useState(data)
    const Filter_Data_by_Search = (value) => {
        changeData(prev => { 
            return prev.filter(item => item.title.toLowerCase().includes(value.toLowerCase()))
        })
    }
    useEffect(() => {
        changeData(Data)
        Filter_Data_by_Search(Search)
    }, [Search])

    useEffect(() => {
        changeData(Data)
        console.log("Addons Changed")
        changeData(prev => prev.filter(item => AddedFiltters.includes(item.className.id)))
        if (AddedFiltters.length <= 0) {
            changeData(Data)
        }
    }, [AddedFiltters])
    return (
        <div className="wrapper1">
            <div className="left">
                <div className="left-container">
                     <div className="input-wrapper">
                        <BsSearch className="search" />
                        <input className="input-" value={Search} onChange={e => changeSearch(e.target.value)} type="email" placeholder="Search" />
                    </div>
                    <div className="bottom-">
                        {options.map(item => {
                            return (
                                <CheckBoxWithLabel changeAddedFiltters={changeAddedFiltters} id={item.id} label={item.name} />)
                        })}
                    </div>
                </div>
            </div>
            <div className="right ">
                {Data.map(item => <Blog_Component item={item} />)}
            </div>
        </div>
    )
}

export default Template 