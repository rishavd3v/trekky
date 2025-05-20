import React from "react";

const ImageGrid = () => {
  const images = [
    "/images/image.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg"
  ];

  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-3 h-[600px]">
      <div className="row-span-2 col-span-1">
        <img
          src={images[0]}
          alt="Trek Image 1"
          className="w-full h-full object-cover rounded-l-4xl cursor-pointer"
        />
      </div>

      {images.slice(1).map((img, index) => (
        <div key={index} className="col-span-1">
          <img
            src={img}
            alt={`Trek Image ${index + 2}`}
            className={`w-full h-full object-cover cursor-pointer ${index==1 && "rounded-tr-4xl" || index==3 && "rounded-br-4xl"}`}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;