import React, { useState, ChangeEvent } from "react";

type DropdownProps<T> = {
  label: string;
  options: T[];
  selectedOption: T;
  onOptionSelected: (option: T) => void;
};

const FilterSelect = <T extends string>({
  label,
  options,
  selectedOption,
  onOptionSelected,
}: DropdownProps<T>) => {
  const handleOptionSelected = (option: T) => {
    onOptionSelected(option);
  };

  return (
    <div className=" px-3 border border-gray-500 rounded w-max flex items-center ">
      <button className="dropdown-toggle">{label}</button>

      <select
        value={selectedOption}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          handleOptionSelected(e.target.value as T)
        }
        className="bg-transparent border-none focus:ring-0 text-fuchsia-800"
      >
        {options.map((option: T) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterSelect;
