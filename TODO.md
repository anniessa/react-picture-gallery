# TODO

## Setup
[x] add images to `public/images`
[x] modify `server/modules/data.js`  to include an `id`, `title`, `description` and `path for` each of your images. Each `id` should be a unique number (e.g. 1, 2, 3...).
[x]`npm install nodemon --global`

## Base Mode
[]App.jsx
[x]Use `axios` to retrieve (`GET`) data from to `/gallery` and store it in `App.jsx`.

[]GalleryList.jsx

[] Create a new **component** for the `GalleryList` and pass it the gallery data stored in `App` via `props`.
[] Iterate (loop over) the list of gallery data
[] Make GalleryItems


[]GalleryItem.jsx
- Create a new **component** called `GalleryItem.jsx` and pass it the individual gallery item via `props`. 
- Update the `GalleryList` to use this component to display an image.
- Swap the image with the description on click. Use [conditional rendering](https://reactjs.org/docs/conditional-rendering.html).
- Display the number likes for each item and include a like button.
- When the like button is clicked, use `Axios` to update (`PUT`) the like count `/gallery/like/:id`.
- Update the gallery each time a like button is clicked.




