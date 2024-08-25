import { useState } from "react";
import SizeSelectorButton from "./SizeSelectorButton";

export default function SizeSelector({ availableSizes }) {
  const [selectedSize, setSelectedSize] = useState(availableSizes[1]);

  return (
    <>
      <p className="uppercase text-sm font-semibold">Choose size</p>
      <div className="flex gap-x-3 text-sm">
        {availableSizes.map((size) => (
          <SizeSelectorButton
            onClick={() => setSelectedSize(size)}
            selectedSize={selectedSize}
            size={size}
          />
        ))}
      </div>
    </>
  );
}
