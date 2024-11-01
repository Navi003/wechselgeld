import { useEffect, useState } from "react";
import CoinRolls from "./components/CoinRolls";
import Coins from "./components/Coins";
import Notes from "./components/Notes";

const conRollsInitalState = {
  zeroPoint01: "",
  zeroPoint02: "",
  zeroPoint05: "",
  zeroPoint10: "",
  zeroPoint20: "",
  zeroPoint50: "",
  one: "",
  two: "",
};

const notesInitialState = {
  twoHundred: "",
  oneHundred: "",
  fifty: "",
  twenty: "",
  ten: "",
  five: "",
};

const coinsInitialState = {
  twoEuro: "",
  oneEuro: "",
  fiftyCent: "",
  twentyCent: "",
  tenCent: "",
  fiveCent: "",
  twoCent: "",
  oneCent: "",
};

function App() {
  const [grandTotal, setGrandTotal] = useState("");

  const [coinRollsAmounts, setCoinRollAmounts] = useState(conRollsInitalState);

  const [notesAmounts, setNotesAmounts] = useState(notesInitialState);

  const [coinAmounts, setCoinAmounts] = useState(coinsInitialState);

  // Calculate total amount based on predefined values and user input quantities
  const calculateTotalCoinRolls = () => {
    const total =
      coinRollsAmounts.zeroPoint01 * 0.5 +
      coinRollsAmounts.zeroPoint02 * 1 +
      coinRollsAmounts.zeroPoint05 * 2.5 +
      coinRollsAmounts.zeroPoint10 * 4 +
      coinRollsAmounts.zeroPoint20 * 8 +
      coinRollsAmounts.zeroPoint50 * 20 +
      coinRollsAmounts.one * 25 +
      coinRollsAmounts.two * 50;

    return total.toFixed(2); // Format to 2 decimal places
  };

  const calculateTotalCoins = () => {
    const total =
      (parseInt(coinAmounts.twoEuro) || 0) * 2 +
      (parseInt(coinAmounts.oneEuro) || 0) * 1 +
      (parseInt(coinAmounts.fiftyCent) || 0) * 0.5 +
      (parseInt(coinAmounts.twentyCent) || 0) * 0.2 +
      (parseInt(coinAmounts.tenCent) || 0) * 0.1 +
      (parseInt(coinAmounts.fiveCent) || 0) * 0.05 +
      (parseInt(coinAmounts.twoCent) || 0) * 0.02 +
      (parseInt(coinAmounts.oneCent) || 0) * 0.01;

    return total.toFixed(2); // Format to 2 decimal places
  };

  const calculateTotalNotes = () => {
    const total =
      (parseInt(notesAmounts.twoHundred) || 0) * 200 +
      (parseInt(notesAmounts.oneHundred) || 0) * 100 +
      (parseInt(notesAmounts.fifty) || 0) * 50 +
      (parseInt(notesAmounts.twenty) || 0) * 20 +
      (parseInt(notesAmounts.ten) || 0) * 10 +
      (parseInt(notesAmounts.five) || 0) * 5;

    return total.toFixed(2); // Format to 2 decimal places
  };

  useEffect(() => {
    const total =
      parseFloat(calculateTotalCoinRolls()) +
      parseFloat(calculateTotalNotes()) +
      parseFloat(calculateTotalCoins());

    const grandTotalValue = Number(total).toFixed(2);

    setGrandTotal(grandTotalValue);
    // eslint-disable-next-line
  }, [coinRollsAmounts, coinAmounts, notesAmounts]);

  const resetHandler = () => {
    setCoinRollAmounts(conRollsInitalState);
    setNotesAmounts(notesInitialState);
    setCoinAmounts(coinsInitialState);
  };

  return (
    <div className="flex flex-col justify-between h-screen">
      <div>
        <div className="p-8 text-xl font-bold text-center bg-orange-300">
          GESAMT BETRAG :<br></br> {grandTotal}€
        </div>

        <Notes
          totalNotes={calculateTotalNotes}
          setAmounts={setNotesAmounts}
          amounts={notesAmounts}
        />
        <CoinRolls
          totalCoinRolls={calculateTotalCoinRolls}
          amounts={coinRollsAmounts}
          setAmounts={setCoinRollAmounts}
        />
        <Coins
          totalCoins={calculateTotalCoins}
          amounts={coinAmounts}
          setAmounts={setCoinAmounts}
        />
      </div>
      <button
        onClick={resetHandler}
        className="w-full p-6 font-semibold text-red-100 transition-all bg-red-500 active:scale-[.9] "
      >
        Reset
      </button>
    </div>
  );
}

export default App;
