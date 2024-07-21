"use client";

import { useState } from "react";

const SizeSelector = ({ sizes }: { sizes: string[] }) => {
  const [selectedSize, setSelectedSize] = useState("");

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <div className="mb-4">
      <h3 className="text-lg mb-2">Select Size:</h3>
      <div className="flex space-x-2">
        {sizes.map((size) => (
          <button
            key={size}
            className={`btn ${
              selectedSize === size ? "btn-primary" : "btn-secondary"
            }`}
            onClick={() => handleSizeChange(size)}
          >
            {size}
          </button>
        ))}
      </div>
      {selectedSize && (
        <div className="mt-2">
          Selected Size: <span className="font-semibold">{selectedSize}</span>
        </div>
      )}
    </div>
  );
};

export default SizeSelector;
