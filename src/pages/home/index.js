import React from 'react'
import './style.css'
import logo from '../../Assets/big-logo.svg'
// import logo from '../../Assets/Logo.svg'

const Home = (props) => {
    return (
        <div>
            <div id="home">
                <img src={logo} />
            </div>
            <div className="logo-bottom">
                <div className="about">
                    <h6 style={{alignSelf:'center',color:'white',fontFamily:'Autowide',fontSize:40}} >Who Am I</h6>
                </div>
                {/* <div className="about">

                </div> */}
            </div>
        </div>
    )
}
export default Home 