import React from 'react'
import './Gallery.css';

const Gallery = ({images}) => {
    
    const imageList = images.map(image => {
        return(
            <div key={image.id} className='images'>
                <img src={image.link} alt={image.id} height='350px' width='300px'/>
            </div>
        )
    })

    return(
        <div className='gallery'>
            {imageList}
        </div>
    )

}

export default Gallery