import SizeSelector from "./components/SizeSelector";
import Button from "./components/Button";
import ProductGallery from "./components/ProductGallery";

import frontImage from "./assets/images/products/polo/front.png";
import sideImage from "./assets/images/products/polo/side.png";
import backImage from "./assets/images/products/polo/back.png";

const App = () => {
  const productData = {
    category: "Polo Ralph",
    name: "Custom Fit Polo Bear Oxford Shirt",
    description:
      "Blue polo with a classic cut. Made of smooth and soft cotton.",
    price: 132,
    discount: 0.25, // 25%
    availableSizes: ["s", "m", "l", "xl", "2xl"],
    images: [frontImage, sideImage, backImage],
  };

  const discountedPrice = (
    productData.price -
    productData.price * productData.discount
  ).toFixed(2);

  const handleAddToBag = () => {
   alert('Product added!')
  };

  return (
    <main className="h-screen w-screen flex items-center merriweather-regular">
      <div className="container mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-x-6 max-w-[850px]">
        <ProductGallery productData={productData} />
        <div className="flex flex-col gap-y-3 justify-between">
          <p className="uppercase text-brandblue text-sm">
            {productData.category}
          </p>
          <h1 className="text-3xl font-semibold">{productData.name}</h1>
          <p className="text-gray-600 text-xs">{productData.description}</p>
          <p className="text-2xl font-semibold">
            {`$${discountedPrice}`} <span className="bg-brandblue-light text-sm text-brandblue font-semibold ml-2 rounded p-1">-25%</span>
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
