import { useState } from 'react';
import Button from '@mui/material/Button';
import './GalleryItem.css'

function GalleryItem({ galleryItem, handleLike }) {

    const [display, setDisplay] = useState([]);

    const handleClick = () => {
        setDisplay(!display)
    };

    const likePhoto = () => {
        handleLike(galleryItem.id, galleryItem.likes);
    };

    return (
        <div className='item'>
            {display ? <img className="image" src={galleryItem.path} onClick={handleClick} /> :
                <p onClick={handleClick} className="description"> {galleryItem.description} </p>}
            <Button 
            onClick={likePhoto}
            variant="outlined"
            > Love it! ❤️‍🔥 </Button>
            {galleryItem.likes ? <p>{galleryItem.likes} people love it! </p> : <p>No one loves this 😿 </p>}
        </div>
    )

};

export default GalleryItem;