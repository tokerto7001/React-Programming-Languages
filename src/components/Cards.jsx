import React, { useState } from 'react'


export default function Cards({ name, img, options }) {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
        
    }

    return (
        <div>
            <div className="small-card" onClick={handleClick}>
                
                {
                     clicked ? 
                     <div className="scripts">
                             <ul>
                                 {options.map((element, index) => (
                                     <li key={index}>{element}</li>
                                 ))}
                             </ul>
                         </div>:
                         <div>
                         <div className="image-div">
                             <img className="images" src={img} />
                         </div>
                         <p className="title"> {name} </p>
                     </div> 
                         

                }


            </div>
        </div>
    )
}
