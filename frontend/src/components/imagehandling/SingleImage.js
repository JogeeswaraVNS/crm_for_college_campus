import axios from 'axios';
import React, { useState, useEffect } from 'react';

const SingleImage = () => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/get-image', { responseType: 'arraybuffer' });
        const blob = new Blob([response.data], { type: 'image/png' });
        const url = URL.createObjectURL(blob);
        setImageUrl(url);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, []);

  return (
    <div>
      {imageUrl && (
        <img src={imageUrl} alt="Fetched Image" />
      )}
    </div>
  );
};

export default SingleImage;
