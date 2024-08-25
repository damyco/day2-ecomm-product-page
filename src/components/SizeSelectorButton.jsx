import React from "react";
import clsx from "clsx";

export default function SizeSelectorButton({ onClick, selectedSize, size }) {
  const styles = clsx(
    "px-3 py-1.5  uppercase transition rounded",
    selectedSize === size
      ? "bg-black text-white hover:bg-black"
      : "hover:bg-gray-300"
  );

  return (
    
    <button onClick={onClick} className={styles}>
      {size}
    </button>
  );
}
