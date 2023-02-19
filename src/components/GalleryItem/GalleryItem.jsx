import {useState} from 'react';

function GalleryItem({galleryItem, handleLike}) {
    console.log('in gallery item')

    const [display, setDisplay] = useState([]);
    const [likeText, setLikeText] = useState([]);
 
    const handleClick = () => {
        setDisplay(!display)
        console.log('clicked'); 
      };

    const likePhoto = () => {
        handleLike(galleryItem.id);
    }

    const handleLikeText = () => {
        

    }


    
    return(
        <div>
            <>
            {display ? <img src={galleryItem.path} onClick={handleClick} /> : 
            <p onClick={handleClick}> {galleryItem.description} </p>}
            <button onClick={likePhoto}> Love it! ❤️‍🔥 </button>
             {galleryItem.likes ? <p>{galleryItem.likes} people love it </p> : <p>No one loves this 😿 </p>} 
            </>

        </div>
    )
    
}

export default GalleryItem;