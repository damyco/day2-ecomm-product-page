import React from "react";
import clsx from "clsx";
import { useState } from "react";

export default function ProductGallery({ productData }) {
  const [selectedImage, setSelectedImage] = useState(productData.images[0]);

  return (
    <div className="basis-1/2 flex gap-x-6">
      <div className="flex shrink-0 flex-col gap-y-3 w-16">
        {productData.images.map((image) => (
          <button
            onClick={() => setSelectedImage(image)}
            className={clsx(
              " border-2 border-transparent rounded transition",
              selectedImage === image
                ? "border-brandblue"
                : "hover:border-brandgray-dark"
            )}
          >
            <img src={image} className="rounded" />
          </button>
        ))}
      </div>
      <img src={selectedImage} className="object-scale-down" />
    </div>
  );
}
