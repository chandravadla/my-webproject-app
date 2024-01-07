// import React from 'react';
// import './Cube.scss'; // Import the CSS file for styling

// const Cube = () => {
//   return (
//     <div className="cube">
//       <div className="cube-face cube-face-1">
//         <img src="http://localhost:3000/static/media/bg-image-hero.8f8034e00516913325a8.jpg" alt="Image 1" />
//       </div>
//       <div className="cube-face cube-face-2">
//         <img src="http://localhost:3000/static/media/bg-image-hero.8f8034e00516913325a8.jpg" alt="Image 2" />
//       </div>
//       <div className="cube-face cube-face-3">
//         <img src="image3.jpg" alt="Image 3" />
//       </div>
//       <div className="cube-face cube-face-4">
//         <img src="image4.jpg" alt="Image 4" />
//       </div>
//       <div className="cube-face cube-face-5">
//         <img src="image5.jpg" alt="Image 5" />
//       </div>
//       <div className="cube-face cube-face-6">
//         <img src="image6.jpg" alt="Image 6" />
//       </div>
//     </div>
//   );
// };

// export default Cube;


// import React, { useState, useEffect } from 'react';
// import './Cube.scss'; // Import the CSS file for styling

// const Cube = () => {
//   const [randomRotation, setRandomRotation] = useState({
//     x: Math.floor(Math.random() * 360),
//     y: Math.floor(Math.random() * 360),
//     z: Math.floor(Math.random() * 360),
//   });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setRandomRotation({
//         x: Math.floor(Math.random() * 360),
//         y: Math.floor(Math.random() * 360),
//         z: Math.floor(Math.random() * 360),
//       });
//     }, 2000); // Change rotation every 2 seconds (adjust timing as needed)

//     return () => clearInterval(interval); // Clear the interval on component unmount
//   }, []);

//   return (
//     <div
//       className="cube"
//       style={{
//         transform: `rotateX(${randomRotation.x}deg) rotateY(${randomRotation.y}deg) rotateZ(${randomRotation.z}deg)`,
//       }}
//     >
//       <div className="cube-face cube-face-1">
//         <img src="http://localhost:3000/static/media/bg-image-hero.8f8034e00516913325a8.jpg" alt="Image 1" />
//       </div>
//       <div className="cube-face cube-face-2">
//         <img src="http://localhost:3000/static/media/bg-image-hero.8f8034e00516913325a8.jpg" alt="Image 1" />
//       </div>
//       <div className="cube-face cube-face-3">
//         <img src="http://localhost:3000/static/media/bg-image-hero.8f8034e00516913325a8.jpg" alt="Image 1" />
//       </div>
//       <div className="cube-face cube-face-4">
//         <img src="http://localhost:3000/static/media/bg-image-hero.8f8034e00516913325a8.jpg" alt="Image 1" />
//       </div>
//       <div className="cube-face cube-face-5">
//         <img src="http://localhost:3000/static/media/bg-image-hero.8f8034e00516913325a8.jpg" alt="Image 1" />
//       </div>
//       <div className="cube-face cube-face-6">
//         <img src="http://localhost:3000/static/media/bg-image-hero.8f8034e00516913325a8.jpg" alt="Image 1" />
//       </div>
//       {/* Include cube faces for images 2 to 6 similarly */}
//     </div>
//   );
// };

// export default Cube;


// import React, { useState, useEffect } from 'react';
// import './Cube.scss'; // Import the CSS file for styling

// const Cube = () => {
//   const [currentSide, setCurrentSide] = useState(1);

//   const rotateCube = () => {
//     setCurrentSide((currentSide % 6) + 1); // Cycle through sides 1 to 6
//   };

//   useEffect(() => {
//     const interval = setInterval(rotateCube, 2000); // Rotate every 2 seconds (adjust timing as needed)
//     return () => clearInterval(interval); // Clear the interval on component unmount
//   }, [currentSide]);

//   return (
//     <div className={`cube show-side-${currentSide}`}>
//       <div className="cube-face cube-face-1">
//         <img src="http://localhost:3000/static/media/bg-image-hero.8f8034e00516913325a8.jpg" alt="Image 1" />
//       </div>
//       <div className="cube-face cube-face-2">
//         <img src="http://localhost:3000/static/media/bg-image-hero.8f8034e00516913325a8.jpg" alt="Image 1" />
//       </div>
//       <div className="cube-face cube-face-3">
//         <img src="http://localhost:3000/static/media/bg-image-hero.8f8034e00516913325a8.jpg" alt="Image 1" />
//       </div>
//       <div className="cube-face cube-face-4">
//         <img src="http://localhost:3000/static/media/bg-image-hero.8f8034e00516913325a8.jpg" alt="Image 1" />
//       </div>
//       <div className="cube-face cube-face-5">
//         {/* <img src="http://localhost:3000/static/media/bg-image-hero.8f8034e00516913325a8.jpg" alt="Image 1" /> */}
//       </div>
//       <div className="cube-face cube-face-6">
//         <img src="http://localhost:3000/static/media/bg-image-hero.8f8034e00516913325a8.jpg" alt="Image 1" />
//       </div>
//       {/* Include cube faces for images 2 to 6 similarly */}
//     </div>
//   );
// };

// export default Cube;


import React, { useState, useEffect } from 'react';
import './Cube.scss'; // Import the CSS file for styling

const Cube = () => {
  const [currentRotation, setCurrentRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRotation((currentRotation + 90) % 360); // Rotate by 90 degrees each time
    }, 1000); // Rotate every 1 second (adjust timing as needed)

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, [currentRotation]);

  return (
    <div className="cube" style={{ transform: `rotate3d(1, 1, 1, ${currentRotation}deg)` }}>
      <div className="cube-face cube-face-1">
        <img src="http://localhost:3000/static/media/bg-image-hero.8f8034e00516913325a8.jpg" alt="Image 1" />
      </div>
      <div className="cube-face cube-face-2">
        <img src="http://localhost:3000/static/media/bg-image-hero.8f8034e00516913325a8.jpg" alt="Image 1" />
      </div>
      <div className="cube-face cube-face-3">
        <img src="http://localhost:3000/static/media/bg-image-hero.8f8034e00516913325a8.jpg" alt="Image 1" />
      </div>
      <div className="cube-face cube-face-4">
        <img src="http://localhost:3000/static/media/bg-image-hero.8f8034e00516913325a8.jpg" alt="Image 1" />
      </div>
      <div className="cube-face cube-face-5">
        <img src="http://localhost:3000/static/media/bg-image-hero.8f8034e00516913325a8.jpg" alt="Image 1" />
      </div>
      <div className="cube-face cube-face-6">
        <img src="http://localhost:3000/static/media/bg-image-hero.8f8034e00516913325a8.jpg" alt="Image 1" />
      </div>
      {/* Include cube faces for images 2 to 6 similarly */}
    </div>
  );
};

export default Cube;
