import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm';

import './App.css';


function App() {

  const [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    console.log('in fetch images')
    axios.get('/gallery')
      .then((response) => {
        setGalleryList(response.data);
      })
      .catch((error) => {
        alert('error getting gallery list')
      })
  }

  const addImage = (image) => {
    axios.post('/gallery', image)
    .then ((response) => {
      fetchImages();
    })
    .catch((error) => {
      console.error(error)
    })

  // const handleLike = () => {
  //   console.log('in handle like')
  //   for (const galleryItem of galleryItems) {
  //     if (galleryItem.id == galleryId) {
  //       galleryItem.likes += 1;
  //       axios
  //         .put(`/gallery/like/${id}`)
  //         .then(() => {
  //           fetchImages();
  //         })
  //         .catch((error) => {
  //           console.error(error);
  //         })
  //       }
  //     }

  
  }
      return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Gallery of My Life</h1>
          </header>
          <GalleryForm  addImage={addImage}/>
          <GalleryList
            galleryList={galleryList} />
          
        </div>
      );
    }

  export default App;
