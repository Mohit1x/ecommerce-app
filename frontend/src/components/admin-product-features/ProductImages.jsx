import { useState } from "react";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { compressToBase64 } from "lz-string";

export const ProductImages = ({ setProductImages, productImages }) => {
  const [showRemove, setShowRemove] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  console.log(productImages, "product images");
  console.log(selectedImage, "product images");

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        // Convert to base64
        const base64 = await convertToBase64(file);

        // Compress base64 string using lz-string
        const compressedBase64 = compressToBase64(base64);

        // Store compressed string in product images
        setProductImages((prev) => [...prev, compressedBase64]);
      } catch (error) {
        console.error("Image base64 compression failed:", error);
      }
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (err) => reject(err);
    });
  };

  const handleRemoveImg = (indexToRemove) => {
    setProductImages((prevImages) => {
      const newImages = prevImages.filter(
        (_, index) => index !== indexToRemove
      );

      setSelectedImage((prevSelected) => {
        if (prevSelected === indexToRemove) {
          return Math.max(0, prevSelected - 1);
        }
        if (prevSelected > indexToRemove) {
          return prevSelected - 1;
        }
        return prevSelected;
      });

      return newImages;
    });
  };

  return (
    <div className="h-full">
      <div className="flex flex-col gap-2 h-full p-2 bg-[#F9F9F9] rounded-xl">
        <div className="flex flex-col gap-4 p-4 h-full rounded-xl">
          <h1 className="font-semibold">Upload Images</h1>
          <div className="w-full bg-[#EFEFEF] rounded-xl h-[80%] overflow-hidden flex items-center justify-center">
            {productImages.length > 0 ? (
              <img
                src={productImages[selectedImage]}
                alt=""
                className="h-full w-full object-contain"
              />
            ) : (
              <div className="overflow-hidden min-h-[300px] w-full mx-auto flex items-center justify-center bg-[#e4f3ed] rounded-xl">
                <label
                  htmlFor="file-upload"
                  className="p-1 rounded-full bg-green-400 text-white cursor-pointer"
                >
                  <IoMdAdd size={16} />
                </label>
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>
            )}
          </div>

          {productImages.length > 0 && (
            <div className="h-[20%] grid grid-cols-4 gap-2">
              {productImages?.map((img, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  onMouseEnter={() => setShowRemove(index)}
                  onMouseLeave={() => setShowRemove(null)}
                  className={`overflow-hidden h-full w-full mx-auto flex items-center justify-center bg-[#EFEFEF] rounded-xl hover:bg-gray-300 relative ${
                    index === selectedImage
                      ? "border border-gray-500 rounded-xl"
                      : ""
                  }`}
                >
                  <img src={img} className="h-full object-cover" />
                  {showRemove === index && (
                    <div
                      onClick={() => handleRemoveImg(index)}
                      className="bg-white rounded absolute h-[20px] w-[20px] right-1 top-1 text-red-400 flex items-center justify-center cursor-pointer"
                    >
                      <IoMdRemove size={16} />
                    </div>
                  )}
                </div>
              ))}
              {productImages.length !== 4 && (
                <div className="overflow-hidden h-full w-full mx-auto flex items-center justify-center bg-[#e4f3ed] rounded-xl">
                  <label
                    htmlFor="file-upload"
                    className="p-1 rounded-full bg-green-400 text-white cursor-pointer"
                  >
                    <IoMdAdd size={16} />
                  </label>
                  <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
