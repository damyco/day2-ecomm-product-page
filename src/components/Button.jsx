import React from "react";

export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-brandblue text-white text-sm w-full py-2 uppercase rounded mt-6 transition hover:bg-brandblue/90 hover:shadow-md"
    >
      {children}
    </button>
  );
}
