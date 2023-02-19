import GalleryItem from "../GalleryItem/GalleryItem";
import "./GalleryList.css";


function GalleryList({ galleryList, handleLike }) {
    console.log(galleryList)

    return (
        <div id="list-container">
            <div id="list-header">
                <h3>Gallery List</h3>
            </div>
            <div id="list">
                {galleryList.map((galleryItem) => {
                    return <GalleryItem
                        key={galleryItem.id}
                        className="gallery-item"
                        galleryItem={galleryItem}
                        handleLike={handleLike}

                    />

                })}
            </div>
        </div>
    );

}

export default GalleryList;