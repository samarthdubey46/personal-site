import React from 'react'
import './style.css'
import logo from '../../Assets/download .svg'
// import logo from '../../Assets/Logo.svg'

const Home = (props) => {
    return (
        <div id="home">
            {/* <div className="logo-div"> */}
                <img src={logo} />
            {/* </div> */}
        </div>
    )
}
export default Home 