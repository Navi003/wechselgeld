import React, { useState } from "react";
import Input from "./Input"; // Ensure this component accepts props correctly
import Hamburger from "hamburger-react";

export default function CoinsRolls() {
  const [isOpen, setOpen] = useState(false);
  const [amounts, setAmounts] = useState({
    zeroPoint01: "",
    zeroPoint02: "",
    zeroPoint05: "",
    zeroPoint10: "",
    zeroPoint20: "",
    zeroPoint50: "",
    one: "",
    two: "",
  });

  // Calculate total amount based on predefined values and user input quantities
  const calculateTotal = () => {
    const total =
      amounts.zeroPoint01 * 0.01 +
      amounts.zeroPoint02 * 0.02 +
      amounts.zeroPoint05 * 0.05 +
      amounts.zeroPoint10 * 0.1 +
      amounts.zeroPoint20 * 0.2 +
      amounts.zeroPoint50 * 0.5 +
      amounts.one * 1.0 +
      amounts.two * 2.0;

    return total.toFixed(2); // Format to 2 decimal places
  };

  const handleChange = (e, key) => {
    setAmounts({
      ...amounts,
      [key]: e.target.value,
    });
  };

  return (
    <>
      <div className="flex items-center justify-between mx-5">
        <h2 className="text-center">Rollen</h2>
        <h2>GESAMT BETRAG: {calculateTotal()} €</h2>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      {isOpen && (
        <div className="flex flex-wrap justify-center gap-3 p-4 bg-purple-400">
          <Input
            type="text"
            className="w-20 p-4 rounded-md"
            placeholder="0.01€"
            value={amounts.zeroPoint01}
            onChange={(e) => handleChange(e, "zeroPoint01")}
          />
          <Input
            type="text"
            className="w-20 p-4 rounded-md"
            placeholder="0.02€"
            value={amounts.zeroPoint02}
            onChange={(e) => handleChange(e, "zeroPoint02")}
          />
          <Input
            type="text"
            className="w-20 p-4 rounded-md"
            placeholder="0.05€"
            value={amounts.zeroPoint05}
            onChange={(e) => handleChange(e, "zeroPoint05")}
          />
          <Input
            type="text"
            className="w-20 p-4 rounded-md"
            placeholder="0.10€"
            value={amounts.zeroPoint10}
            onChange={(e) => handleChange(e, "zeroPoint10")}
          />
          <Input
            type="text"
            className="w-20 p-4 rounded-md"
            placeholder="0.20€"
            value={amounts.zeroPoint20}
            onChange={(e) => handleChange(e, "zeroPoint20")}
          />
          <Input
            type="text"
            className="w-20 p-4 rounded-md"
            placeholder="0.50€"
            value={amounts.zeroPoint50}
            onChange={(e) => handleChange(e, "zeroPoint50")}
          />
          <Input
            type="text"
            className="w-20 p-4 rounded-md"
            placeholder="1.00€"
            value={amounts.one}
            onChange={(e) => handleChange(e, "one")}
          />
          <Input
            type="text"
            className="w-20 p-4 rounded-md"
            placeholder="2.00€"
            value={amounts.two}
            onChange={(e) => handleChange(e, "two")}
          />
        </div>
      )}
    </>
  );
}
