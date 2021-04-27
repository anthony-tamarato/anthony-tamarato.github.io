//App.js
import React from 'react';
import Thumbnail from './components/thumbnail.js';

// Import the BrowserRouter, Route and Link components

import './App.css';

function App() {
  return (
    <>
      <Thumbnail
      demo="images/php_api_test_1.jpg"
      code="https://github.com/anthony-tamarato/anthony_tamarato_api_test"
      image="images/php_api_test_1.jpg"
      title="PHP/API Test"
      description="A PHP test page that dynamicly creates a paginated table from an API call."
       />

      <Thumbnail
      demo="https://kensehmanthejeweler.com/"
      code="#"
      image="images/jeweler.jpg"
      title="Jeweler"
      description="A redsigne for a jeweler. Created with WordPress."
       />
       <Thumbnail
      demo="images/turf.jpg"
      code="#"
      image="images/turf.jpg"
      title="Lawncare"
      description="An ecommerce website for a truf company. Created with WordPress."
       />
       <Thumbnail
      demo="https://jetservice-envelope.com/"
      code="#"
      image="images/letter.jpg"
      title="Print Shop"
      description="An ecommerce website for a print shop. Created with WordPress."
       />
       <Thumbnail
      demo="https://heathershomeworks.com/"
      code="#"
      image="images/cleaner.jpg"
      title="Home Cleaners"
      description="A redesign for a home cleaners. Created with WordPress."
       />
    </>
  );
}

export default App;
