import React, { useState, useEffect } from 'react';

const MultiImages = () => {
  const [imageDataList, setImageDataList] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/get-multiple-images');
        const data = await response.json();
        setImageDataList(data.image_data_list);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      {imageDataList.map((imageData, index) => (
        <img
          key={index}
          src={`data:image/png;base64,${imageData}`}
          alt={`Image ${index + 1}`}
          style={{ maxWidth: '100px', margin: '5px' }}
        />
      ))}
    </div>
  );
};

export default MultiImages;
