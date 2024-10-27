import React, { useState } from "react";
import Input from "./Input"; // Ensure this component accepts props correctly
import Hamburger from "hamburger-react";

export default function Coins({ amounts, setAmounts, totalCoins }) {
  const [isOpen, setOpen] = useState(false);

  // Calculate total amount based on entered values

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
        <h2>GESAMT BETRAG: {totalCoins()} €</h2>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      {isOpen && (
        <div className="flex flex-wrap justify-center gap-3 p-4 bg-blue-500">
          <Input
            type="text" // Changed to text for better input validation
            className="w-20 p-4 rounded-md"
            placeholder="2€"
            value={amounts.twoEuro}
            onChange={(e) => handleChange(e, "twoEuro")}
          />
          <Input
            type="text"
            className="w-20 p-4 rounded-md"
            placeholder="1€"
            value={amounts.oneEuro}
            onChange={(e) => handleChange(e, "oneEuro")}
          />
          <Input
            type="text"
            className="w-20 p-4 rounded-md"
            placeholder="0.50€"
            value={amounts.fiftyCent}
            onChange={(e) => handleChange(e, "fiftyCent")}
          />
          <Input
            type="text"
            className="w-20 p-4 rounded-md"
            placeholder="0.20€"
            value={amounts.twentyCent}
            onChange={(e) => handleChange(e, "twentyCent")}
          />
          <Input
            type="text"
            className="w-20 p-4 rounded-md"
            placeholder="0.10€"
            value={amounts.tenCent}
            onChange={(e) => handleChange(e, "tenCent")}
          />
          <Input
            type="text"
            className="w-20 p-4 rounded-md"
            placeholder="0.05€"
            value={amounts.fiveCent}
            onChange={(e) => handleChange(e, "fiveCent")}
          />
          <Input
            type="text"
            className="w-20 p-4 rounded-md"
            placeholder="0.02€"
            value={amounts.twoCent}
            onChange={(e) => handleChange(e, "twoCent")}
          />
          <Input
            type="text"
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
