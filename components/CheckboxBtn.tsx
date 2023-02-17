import React, { useState, useEffect } from "react";
type checkBoxProps = {
  item: any;
  onCheckboxChange: any;
  value: any;
  checkboxState: any;
};
const CheckboxBtn = ({
  item,
  onCheckboxChange,
  value,
  checkboxState,
}: checkBoxProps) => {
  const [buttonStyle, setButtonStyle] = useState<string>("");

  function handleCheck() {
    switch (checkboxState) {
      case "neutral":
        // setButtonState("included");
        onCheckboxChange(value, "included");
        setButtonStyle(" text-green-700");
        break;
      case "included":
        // setButtonState("excluded");
        onCheckboxChange(value, "excluded");
        setButtonStyle(" text-red-700");
        break;
      case "excluded":
        // setButtonState("neutral");
        onCheckboxChange(value, "neutral");
        setButtonStyle(" ");
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    switch (item.state) {
      case "neutral":
        // setButtonState("included");

        break;
      case "included":
        // setButtonState("excluded");
        onCheckboxChange(value, "included");
        setButtonStyle(" text-green-700");
        break;
      case "excluded":
        // setButtonState("neutral");
        onCheckboxChange(value, "excluded");
        setButtonStyle("text-red-700");
        break;
      default:
        break;
    }
  }, []);

  return (
    <div className="flex items-center gap-x-2">
      <input
        type="checkbox"
        key={item.id}
        onChange={() => {
          handleCheck();
        }}
        className={`${buttonStyle} focus:ring-gray-400   rounded-full px-3 cursor-pointer select-none transition-all duration-300 ease-out`}
        checked={checkboxState !== "neutral"}
      />
      {item.name}
    </div>
  );
};

export default CheckboxBtn;
