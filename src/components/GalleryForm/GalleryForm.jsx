import { useState } from 'react';

function GalleryForm({galleryList}) {
    const [newImagePath, setNewImagePath] = useState('');
    const [newImageDesc, setNewImageDesc] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();

        let newGalleryImage = {
            path: newImagePath,
            description: newImageDesc
        }
        addNewImage(newGalleryImage, clearInputs);
        clearInputs()
    }

    return (
        <>
            <form className="gallery-form">
                <h3>Add a new image</h3>
                <div id="input-container">
                    <label>Image URL</label>
                    <input onChange={(event) => setNewImagePath(event.target.value)} value={newImagePath} type="text"/>
                    <label>Image Description</label>
                    <input onChange={(event) => setNewImageDesc(event.target.value)} value={newImageDesc} type="text"/>
                    <button onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </form>

        </>

    )

}

export default GalleryForm;