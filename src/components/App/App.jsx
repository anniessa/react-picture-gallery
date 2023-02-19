import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

import GalleryList from '../GalleryList/GalleryList';

import './App.css';


function App() {


  const [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    axios.get('/gallery')
    .then((response) => {
      console.log(galleryList)
      setGalleryList(response.data);
    })
    .catch((error) => {
      alert('error getting gallery list')
    })
  }

  const handleLike = (id) => {
    axios
    .put(`/gallery/like/${id}`)
    .then(() => {
      fetchImages();
    })
    .catch((error) => {
      console.error(error);
    })
}

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        
        <GalleryList 
        galleryList={galleryList}
        handleLike={handleLike}/>
      </div>
    );
}

export default App;
