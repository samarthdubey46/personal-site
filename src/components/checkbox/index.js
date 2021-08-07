import React, { useState } from 'react'
import './style.css'
import { Form, InputGroup } from 'react-bootstrap'
import { BsSearch, BsCheckBox } from 'react-icons/bs'
import { IconContext } from 'react-icons'

export const CheckBox = (props) => {
    const added = props.added
    const changeadded = props.changeadded
    const [Selected, changeSelected] = useState(false)
    return (
            <div>
                <input value={Selected} className="clicked_checkbox" type="checkbox" />
            </div>
    )
}