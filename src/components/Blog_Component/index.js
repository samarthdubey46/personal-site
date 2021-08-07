import React, { useState } from 'react'
import './Blogstyle.css'



const Blog_Component = ({ item }) => {
    const { title, image, desc, className, id, dateAdded } = item

    return (
        <div className="Blog_Component_wrapper">
                <div className="Blog_Component_text_wrapper">
                    <h4 className="Blog_Component_title" >{title}</h4>
                    <p className="Blog_Component_desc" >{desc}</p>
                    <p className="Blog_Component_date" > {dateAdded}</p>
                </div>
                <div className="Blog_Component_img_wrapper">
                    <img src={image} className="Blog_Component_image" />
                </div>
        </div>
    )
}
export default Blog_Component