import { useState } from 'react';

export const Gallery = () => {
  // State untuk menyimpan URL gambar utama
  const [mainImage, setMainImage] = useState('/img/1.jpeg');

  // Array gambar kecil untuk digunakan dalam galeri
  const images = [
    '/img/1.jpeg',
    '/img/2.jpeg',
    '/img/3.jpeg',
    '/img/4.jpeg',
    '/img/5.jpeg'
  ];

  return (
    <>
      <div className="relative dark:bg-gray-800 my-8 min-w-full" id='gallery'>
        <div
          className="absolute inset-0 blur-xl"
          style={{
            background:
              "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
          }}
        ></div>
        <div className="relative container mx-auto sm:px-6 px-6">
          <p className="text-4xl font-semibold text-center my-11 dark:text-gray-400 text-gray-700">
            Gallery
          </p>

          <div className="relative mb-4">
            <img
              className="w-full h-[calc(50vh)] object-cover rounded-lg"
              src={mainImage}
              alt="Main Gallery"
            />
          </div>

          <div className="grid grid-cols-5 gap-4">
            {images.map((img, index) => (
              <div key={index} className="cursor-pointer">
                <img
                  className="w-full h-[calc(25vh)] max-w-full rounded-lg"
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => setMainImage(img)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
