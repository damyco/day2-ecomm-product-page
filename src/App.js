import { useState } from "react";

import frontImage from "./assets/images/products/polo/front.png";
import thumbFront from "./assets/images/products/polo/thumb-front.png";
import thumbSide from "./assets/images/products/polo/thumb-side.png";
import thumbBack from "./assets/images/products/polo/thumb-back.png";
import SizeSelector from "./components/SizeSelector";
import Button from "./components/Button";

const App = () => {
  const productData = {
    category: "Polo Ralph",
    name: "Custom Fit Polo Bear Oxford Shirt",
    description:
      "Blue polo with a classic cut. Made of smooth and soft cotton.",
    price: 132,
    discount: 0.25, // 25%
    availableSizes: ["s", "m", "l", "xl", "2xl"],
    images: [frontImage],
    galleryThumbnails: [thumbFront, thumbSide, thumbBack],
  };

  const [selectedImage, setSelectedImage] = useState("m");

  const discountedPrice = (
    productData.price -
    productData.price * productData.discount
  ).toFixed(2);

  const handleAddToBag = () => {
    console.log("added");
  };

  return (
    <main className="container h-screen w-screen flex items-center">
      <div className="w-full  mx-auto p-6 flex gap-x-6 justify-center">
        <div className="basis-1/2 flex gap-x-6">
          <div className="flex shrink-0 flex-col gap-y-3">
            {productData.galleryThumbnails.map((image) => (
              <button className="hover:border-brandgray-dark border border-transparent rounded-md transition">
                <img src={image} />
              </button>
            ))}
          </div>
          <img src={productData.images[0]} className="object-scale-down " />
        </div>
        <div className=" flex flex-col gap-y-3">
          <p className="uppercase text-brandblue">{productData.category}</p>
          <h1 className="text-3xl font-semibold">{productData.name}</h1>
          <p className="text-gray-600">{productData.description}</p>
          <p className="text-xl">
            {`$${discountedPrice}`} <span className="bg-blue">-25%</span>
          </p>
          <p className="line-through text-gray-400">{`$${productData.price.toFixed(
            2
          )}`}</p>

          <SizeSelector availableSizes={productData.availableSizes} />
          <Button onClick={handleAddToBag}>Add to bag</Button>
        </div>
      </div>
    </main>
  );
};

export default App;
