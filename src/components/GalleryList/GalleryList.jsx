import GalleryItem from "../GalleryItem/GalleryItem";


function GalleryList({galleryList, handleLike}) {
console.log(galleryList)

    return (
        <div id="gallery-list">
        <p>Gallery List</p>
        {galleryList.map((galleryItem) => {
           return <GalleryItem 
            key={galleryItem.id}
            className="gallery-item"
            galleryItem={galleryItem}
            handleLike={handleLike}
            
            />

        })}</div>
        
    )
        
    }
        
export default GalleryList;