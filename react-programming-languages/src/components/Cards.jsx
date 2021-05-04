import React from 'react'


export default function Cards({name, img}) {
    return (
        <div>
                <div className="small-card">
                    <div className="image-div">
                    <img className="images" src={img} />
                    </div>
                    <p className="title"> {name} </p>
                </div>
        </div>
    )
}
