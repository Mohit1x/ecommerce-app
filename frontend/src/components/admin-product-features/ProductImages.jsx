import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

export const ProductImages = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [preview, setPreview] = useState(null);
  const [base64, setBase64] = useState(null);

  const [allProductImages, setAllProductImages] = useState([]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreview(reader.result);
        setBase64(reader.result);
        setAllProductImages((prev) => [...prev, reader.result]);
        console.log("Base64 string:", reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="h-full">
      <div className="flex flex-col gap-2 h-full p-2 bg-[#F9F9F9] rounded-xl">
        <div className="flex flex-col gap-4 p-4 h-full rounded-xl">
          <h1 className="font-semibold">Upload Images</h1>
          <div className="w-full bg-[#EFEFEF] rounded-xl h-[80%] overflow-hidden flex items-center justify-center">
            {allProductImages.length > 0 ? (
              <img
                src={allProductImages[selectedImage]}
                alt=""
                className="h-full w-full object-contain"
              />
            ) : (
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
                  onChange={handleFileChange}
                />
              </div>
            )}
          </div>

          {allProductImages.length > 0 && (
            <div className="h-[20%] grid grid-cols-4 gap-2">
              {allProductImages?.map((images, index) => (
                <div
                  onClick={() => setSelectedImage(index)}
                  className={`overflow-hidden h-full w-full mx-auto flex items-center justify-center bg-[#EFEFEF] rounded-xl ${
                    index == selectedImage
                      ? "border border-gray-500 rounded-xl"
                      : ""
                  }`}
                >
                  <img src={images} className="h-full object-cover" />
                </div>
              ))}
              {allProductImages.length !== 4 && (
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
