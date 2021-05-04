import React, { useState } from 'react'
import logo from "./react.svg"
import { categories } from "./data"
import Cards from './Cards'

export default function Card() {
    
   

    return (
        <div>
            <img src={logo} className="react-image" />

            <div className="card-div">

                <div className="stripe"></div>
                <div className="small-card-div" >
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
