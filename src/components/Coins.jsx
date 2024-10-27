import React, { useState } from "react";
import Input from "./Input"; // Ensure this component accepts props correctly
import Hamburger from "hamburger-react";

export default function Coins() {
  const [isOpen, setOpen] = useState(false);
  const [amounts, setAmounts] = useState({
    twoEuro: "",
    oneEuro: "",
    fiftyCent: "",
    twentyCent: "",
    tenCent: "",
    fiveCent: "",
    twoCent: "",
    oneCent: "",
  });

  // Calculate total amount based on entered values
  const calculateTotal = () => {
    const total =
      (parseInt(amounts.twoEuro) || 0) * 2 +
      (parseInt(amounts.oneEuro) || 0) * 1 +
      (parseInt(amounts.fiftyCent) || 0) * 0.5 +
      (parseInt(amounts.twentyCent) || 0) * 0.2 +
      (parseInt(amounts.tenCent) || 0) * 0.1 +
      (parseInt(amounts.fiveCent) || 0) * 0.05 +
      (parseInt(amounts.twoCent) || 0) * 0.02 +
      (parseInt(amounts.oneCent) || 0) * 0.01;

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
        <h2 className="text-center">Münzen</h2>
        <h2>GESAMT BETRAG: {calculateTotal()} €</h2>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      {isOpen && (
        <div className="flex flex-wrap justify-center gap-3 p-4 bg-purple-400">
          <Input
            type="number" // Changed to number for better input validation
            className="w-20 p-4 rounded-md"
            placeholder="2€"
            value={amounts.twoEuro}
            onChange={(e) => handleChange(e, "twoEuro")}
          />
          <Input
            type="number"
            className="w-20 p-4 rounded-md"
            placeholder="1€"
            value={amounts.oneEuro}
            onChange={(e) => handleChange(e, "oneEuro")}
          />
          <Input
            type="number"
            className="w-20 p-4 rounded-md"
            placeholder="0.50€"
            value={amounts.fiftyCent}
            onChange={(e) => handleChange(e, "fiftyCent")}
          />
          <Input
            type="number"
            className="w-20 p-4 rounded-md"
            placeholder="0.20€"
            value={amounts.twentyCent}
            onChange={(e) => handleChange(e, "twentyCent")}
          />
          <Input
            type="number"
            className="w-20 p-4 rounded-md"
            placeholder="0.10€"
            value={amounts.tenCent}
            onChange={(e) => handleChange(e, "tenCent")}
          />
          <Input
            type="number"
            className="w-20 p-4 rounded-md"
            placeholder="0.05€"
            value={amounts.fiveCent}
            onChange={(e) => handleChange(e, "fiveCent")}
          />
          <Input
            type="number"
            className="w-20 p-4 rounded-md"
            placeholder="0.02€"
            value={amounts.twoCent}
            onChange={(e) => handleChange(e, "twoCent")}
          />
          <Input
            type="number"
            className="w-20 p-4 rounded-md"
            placeholder="0.01€"
            value={amounts.oneCent}
            onChange={(e) => handleChange(e, "oneCent")}
          />
        </div>
      )}
    </>
  );
}
