import { useState } from "react";

export const ProductImages = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const allProductImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4RacjbJkObqLcj70seqkD1wSbFkudSMq5Eg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJR208OmR7V1g9oUzUBJpAmKWKbmutZJNSUV8Ui8mJHNJAHZMkROb7bQ4556md_IJ0hYA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0P0YFBwN_1KV7_pmpCGaJJ06dtUjXviRBHg67O-zEcvLKfK1GKg0piDD5jMZ1l9a4Yug&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0P0YFBwN_1KV7_pmpCGaJJ06dtUjXviRBHg67O-zEcvLKfK1GKg0piDD5jMZ1l9a4Yug&usqp=CAU",
  ];
  return (
    <div className="h-screen">
      <div className="flex flex-col gap-2 h-full p-4">
        <h1>Upload Images</h1>
        <div className="flex flex-col gap-5 h-full">
          <div className="flex flex-col gap-2 p-4 h-[60%] bg-[#efefef] rounded-xl">
            <div className="w-full bg-[#EFEFEF] rounded-xl h-[80%] overflow-hidden">
              <img
                src={allProductImages[selectedImage]}
                alt=""
                className="h-full w-full object-contain"
              />
            </div>
            <div className="h-[20%] flex items-center gap-2">
              {allProductImages.map((images, index) => (
                <div
                  onClick={() => setSelectedImage(index)}
                  className={`overflow-hidden h-full w-full mx-auto flex items-center justify-center ${
                    index == selectedImage
                      ? "border border-gray-500 rounded-xl"
                      : ""
                  }`}
                >
                  <img src={images} className="h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
