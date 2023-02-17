import GalleryItem from "../GalleryItem/GalleryItem";


function GalleryList({ galleryList }) {
console.log(galleryList)

    return (
        <div id="gallery-list">
        {galleryList.map((item) => {
            <GalleryItem 
            key={item.id}
            className="gallery-item"
            item={item}
            />

        })}</div>
        
    )
        
    }
        
export default GalleryList;