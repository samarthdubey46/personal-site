import React from 'react'
import './style.css'
import logo from '../../Assets/big-logo1.png'
import Text_box from '../../components/text-box/text-box'
// import logo from '../../Assets/Logo.svg'

const Home = (props) => {
    const First_Text = "Consequat et pariatur amet ullamco aliquip ut nulla aute occaecat enim.Sint ut ea aliqua sint incididunt reprehenderit. Ex sunt ipsum magna adipisicing et officia non velit culpa id dolor. Voluptate aute adipisicing eu dolore sunt aute commodo nisi ipsum. Consequat ut deserunt ad officia proident aute sunt deserunt aliquip labore excepteur. Incididunt consequat voluptate cillum commodo eiusmod laborum dolor amet do cillum sint Lorem nisi non. Tempor Lorem laborum laboris amet enim."
    const Second_Text = "Reprehenderit consectetur  est reprehenderit veniam labore. Voluptate pariatur laborum sunt exercitation adipisicing labore. Do enim aliquip ad eu et amet ipsum deserunt culpa nisi et nulla."

    return (
        <div className="wrapper">
            <div id="top">
                <img src={logo} className="img" />
            </div>
            <div className="bottom">
                <div className="text-box">
                    <Text_box heading="Who AM I" paragraph={First_Text} heading_family="PlayfairDisplay" />
                </div>
                <div className="text-box">
                    <Text_box heading="WHAT IS TECHMAN" paragraph={Second_Text}  heading_family="PlayfairDisplay" />
                </div>
            </div>

        </div>
    )
}
export default Home 