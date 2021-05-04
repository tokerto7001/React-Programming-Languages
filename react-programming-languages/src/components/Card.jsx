import React, { useState } from 'react'
import logo from "./react.svg"
import { categories } from "./data"
import Cards from './Cards'

export default function Card() {
    
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
        console.log("sa")
    }

    return (
        <div>
            <img src={logo} className="react-image" />

            <div className="card-div">

                <div className="stripe"></div>
                <div className="small-card-div" onClick={handleClick}>
                {
                    categories.map((element) => (
                        <Cards name={element.name}
                            img={element.img}
                            options={element.options}
                        />

                    ))
                }
                </div>
                


            </div>
        </div>
    )
}
