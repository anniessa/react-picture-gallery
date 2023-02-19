import { useState } from 'react';
import './GalleryForm.css'


function GalleryForm({addImage}) {
    const [newImagePath, setNewImagePath] = useState('');
    const [newImageDesc, setNewImageDesc] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        
        let newGalleryImage = {
            path: newImagePath,
            description: newImageDesc
        }
        addImage(newGalleryImage);
        clearInputs();
    }

    const clearInputs = () => {
        setNewImagePath('');
        setNewImageDesc('');
    }

    return (
        <>
            <form className="gallery-form">
                <div id="input-container">
                <h3 className="form-header">Add a new image</h3>
                    <label>Image URL</label>
                    <input onChange={(event) => setNewImagePath(event.target.value)} 
                    value={newImagePath} 
                    type="text"
                    placeholder="Enter image URL"/>
                    <label>Image Description</label>
                    <input onChange={(event) => setNewImageDesc(event.target.value)} 
                    value={newImageDesc} 
                    type="text"
                    placeholder="Enter image description"/>
                    <button onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </form>

        </>

    )

}

export default GalleryForm;