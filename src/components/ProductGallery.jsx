import React from "react";
import clsx from "clsx";
import { useState } from "react";

export default function ProductGallery({ productData }) {
  const [selectedImage, setSelectedImage] = useState(productData.images[0]);

  return (
    <div className="flex flex-col lg:flex-row basis-full lg:basis-1/2 gap-y-3 lg:gap-x-3 justify-right">
      <div className="flex shrink-0 flex-row lg:flex-col gap-x-3 lg:gap-y-3 lg:w-16">
        {productData.images.map((image) => (
          <button
            onClick={() => setSelectedImage(image)}
            className={clsx(
              "border-2  rounded transition",
              selectedImage === image
                ? "border-brandblue"
                : "hover:border-brandgray-dark border-transparent"
            )}
          >
            <img
              src={image}
              className="rounded object-cover max-h-[80px] lg:max-h-[120px]"
            />
          </button>
        ))}
      </div>
      <img
        src={selectedImage}
        className="rounded object-contain max-h-[400px] w-full lg:w-auto"
      />
    </div>
  );
}
