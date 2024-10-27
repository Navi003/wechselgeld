import React, { useState } from "react";
import Input from "./Input"; // Ensure this component accepts props correctly
import Hamburger from "hamburger-react";

export default function BanknotesCalculator({
  setAmounts,
  amounts,
  totalNotes,
}) {
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
        <h2 className="text-center">Noten</h2>
        <h2>GESAMT BETRAG: {totalNotes()} €</h2>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      {isOpen && (
        <div className="flex flex-wrap justify-center gap-3 p-4 bg-green-400">
          <Input
            type="text"
            className="w-20 p-4 rounded-md"
            placeholder="200€"
            value={amounts.twoHundred}
            onChange={(e) => handleChange(e, "twoHundred")}
          />
          <Input
            type="text"
            className="w-20 p-4 rounded-md"
            placeholder="100€"
            value={amounts.oneHundred}
            onChange={(e) => handleChange(e, "oneHundred")}
          />
          <Input
            type="text"
            className="w-20 p-4 rounded-md"
            placeholder="50€"
            value={amounts.fifty}
            onChange={(e) => handleChange(e, "fifty")}
          />
          <Input
            type="text"
            className="w-20 p-4 rounded-md"
            placeholder="20€"
            value={amounts.twenty}
            onChange={(e) => handleChange(e, "twenty")}
          />
          <Input
            type="text"
            className="w-20 p-4 rounded-md"
            placeholder="10€"
            value={amounts.ten}
            onChange={(e) => handleChange(e, "ten")}
          />
          <Input
            type="text"
            className="w-20 p-4 rounded-md"
            placeholder="5€"
            value={amounts.five}
            onChange={(e) => handleChange(e, "five")}
          />
        </div>
      )}
    </>
  );
}
