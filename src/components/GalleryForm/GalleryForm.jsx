import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
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
                    <TextField 
                    fullWidth
                    onChange={(event) => setNewImagePath(event.target.value)} 
                    value={newImagePath} 
                    label="Enter image URL"
                    variant="outlined"
                    />
                    <TextField 
                    fullWidth
                    onChange={(event) => setNewImageDesc(event.target.value)} 
                    value={newImageDesc}
                    label="Enter image description"
                    variant="outlined"/>
                    <Button 
                    className="submit-btn"
                    onClick={handleSubmit} 
                    variant="contained"
                    >
                        Submit
                    </Button>
                </div>
            </form>

        </>

    )

}

export default GalleryForm;