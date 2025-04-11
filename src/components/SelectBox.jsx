// components/SelectBox.jsx
import React from "react";

function SelectBox({ label, options = [] }) {
  return (
    <div>
      <select
        defaultValue=""
        className="py-2 px-3 block w-full font-lighter rounded-md text-black border border-gray-300 shadow-sm focus:border-[#00c0ff] focus:ring-[#00c0ff] text-sm"
      >
        <option value="" disabled>
          {label}
        </option>
        {options.map((option, idx) => (
          <option key={idx} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectBox;
