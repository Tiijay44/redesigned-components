import Dropdown from "../components/Dropdown";
import { useState } from "react";

function DropdownPage() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (option) => {
    setSelectedOption(option);
  };

  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Yellow", value: "yellow" },
  ];
  return (
    <Dropdown
      options={options}
      value={selectedOption}
      onChange={handleChange}
    />
  );
}

export default DropdownPage;
