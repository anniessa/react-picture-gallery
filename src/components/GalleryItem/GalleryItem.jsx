

function GalleryItem({item}) {
    
    return(
        <div>
           <img src={item.path} />
           <p>{item.description}</p>

            

        </div>
    )
    
}

export default GalleryItem;