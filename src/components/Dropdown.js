import { useState, useEffect, useRef } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const divEl = useRef();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // const dropdown = document.querySelector(".w-48");

    const handler = (event) => {
      //   if (dropdown.contains(event.target)) {
      //     return;
      //   } else {
      //     setIsOpen(false);
      //   }

      // Checks to make sure divEl is assigned to prevent minor bugs
      if (!divEl.current) {
        return;
      }

      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler, true);

    // const cleanUp = () => {
    //   document.removeEventListener("click", handler);
    // };
    // return cleanUp;

    // Cleanup function to remove listener when our Dropdown component closes.
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleClick = () => {
    // setIsOpen(!isOpen);

    setIsOpen((curIsOpen) => !curIsOpen);
  };

  const handleOptionClick = (curOption) => {
    // Close dropDown
    setIsOpen(false);

    // What option did the user click on??
    onChange(curOption);
  };

  const icon = (
    <span className="text-2xl">
      {isOpen ? <GoChevronDown /> : <GoChevronLeft />}
    </span>
  );

  const renderedItems = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded p-1 cursor-pointer"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  //   let content = "Select";
  //   if (value) {
  //     content = value.label;
  //   }

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex cursor-pointer bg-gray-50 justify-between items-center font-bold"
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        {icon}
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedItems}</Panel>}
    </div>
  );
}

export default Dropdown;
