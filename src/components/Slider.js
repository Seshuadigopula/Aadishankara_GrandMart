import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

const items = [
    {
      src: '/images/slider1.jpeg', // Example image path (make sure the image is in public/images/)
      altText: 'Toor Dal',
      caption: 'Nagpur special Dal'
    },
    {
      src: '/images/slider2.jpg', // Another image
      altText: 'Cashew Nut',
      caption: 'Vetapalem nuts'
    },
    {
      src: '/images/slider3.webp', // Another image for combo offer
      altText: 'Combo Offer',
      caption: 'Amazing Combo Offers!'
    },
    {
      src: '/images/slider4.jpg', // Another image for combo offer
      altText: 'Combo Offer',
      caption: 'Amazing Combo Offers!'
    }
  ];


function Slider(){
    const [activeIndex, setActiveIndex] = useState(0);

    const next = () => {
        setActiveIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
      };
    
      // Function to go to the previous image
      const previous = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
      };




return(
<div>
    {/* Slider */}
<div className="app">
<div className="slider-container">
  {/* Slide Image */}
  <div className="slider" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
    {items.map((item, index) => (
        <div className="slide" key={index}>
        <img src={item.src} alt={item.altText} className="w-100" />
        
      </div>
    ))}
  </div>

  {/* Navigation Buttons for slider */}
  <button className="nav-button prev" onClick={previous}>❮</button>
  <button className="nav-button next" onClick={next}>❯</button>
</div>
</div>

    </div>

)
}

export default Slider;
