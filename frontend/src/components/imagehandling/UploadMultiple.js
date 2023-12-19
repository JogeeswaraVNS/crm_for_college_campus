import React, { useState } from 'react';

const UploadMultiple
 = () => {
  const [selectedFiles, setSelectedFiles] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFiles(e.target.files);
  };

  const compressAndUpload = async () => {
    try {
      const formData = new FormData();

      for (const file of selectedFiles) {
        const fileSizeInMB = file.size / (1024 * 1024); // Convert to MB

        if (fileSizeInMB > 1) {
          // Compress the image
          const compressedFile = await compressImage(file);
          formData.append('files', compressedFile, file.name);
        } else {
          // Upload the image directly
          formData.append('files', file);
        }
      }

      await fetch('http://127.0.0.1:5000/upload-multiple', {
        method: 'POST',
        body: formData,
      });

      console.log('Files uploaded successfully');
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };

  const compressImage = async (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        const img = new Image();

        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');

          const maxWidth = 800; // Adjust this as needed
          const quality = 1; // Adjust this as needed

          let newWidth = img.width;
          let newHeight = img.height;

          if (img.width > maxWidth) {
            const scaleFactor = maxWidth / img.width;
            newWidth = maxWidth;
            newHeight = img.height * scaleFactor;
          }

          canvas.width = newWidth;
          canvas.height = newHeight;

          ctx.drawImage(img, 0, 0, newWidth, newHeight);

          // Convert the compressed image to base64
          const base64String = canvas.toDataURL('image/jpeg', quality);

          // Convert base64 to Blob
          const blob = dataURItoBlob(base64String);

          // Create a new File with the Blob
          resolve(new File([blob], file.name, { type: 'image/jpeg', lastModified: Date.now() }));
        };

        img.src = event.target.result;
      };

      reader.readAsDataURL(file);
    });
  };

  const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], { type: mimeString });
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={compressAndUpload}>Upload Files</button>
    </div>
  );
};

export default UploadMultiple
;
