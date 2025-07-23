import { useState } from "react";

export const ProductImages = () => {
  const [selectedImages, setSelectedImages] = useState(0);

  const allProductImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4RacjbJkObqLcj70seqkD1wSbFkudSMq5Eg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJR208OmR7V1g9oUzUBJpAmKWKbmutZJNSUV8Ui8mJHNJAHZMkROb7bQ4556md_IJ0hYA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0P0YFBwN_1KV7_pmpCGaJJ06dtUjXviRBHg67O-zEcvLKfK1GKg0piDD5jMZ1l9a4Yug&usqp=CAU",
  ];
  return (
    <div className="bg-gray-200 rounded-xl h-screen">
      <div className="flex flex-col gap-2 h-full p-4">
        <h1>Upload Images</h1>
        <div className="flex flex-col gap-2 p-4 h-[60%]">
          <div className="w-full bg-gray-400 rounded-xl h-[80%]">
            <img
              src={allProductImages[selectedImages]}
              alt=""
              className="h-full w-full object-contain"
            />
          </div>
          <div className="h-[20%] flex items-center gap-2">
            {allProductImages.map((images, index) => (
              <div onClick={() => setSelectedImages(index)}>
                <img
                  src={images}
                  className="h-full w-full object-cover overflow-hidden"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
