import { useEffect, useState } from "react";
import CoinRolls from "./components/CoinRolls";
import Coins from "./components/Coins";
import Notes from "./components/Notes";

function App() {
  const [grandTotal, setGrandTotal] = useState("");

  const [coinRollsAmounts, setCoinRollAmounts] = useState({
    zeroPoint01: "",
    zeroPoint02: "",
    zeroPoint05: "",
    zeroPoint10: "",
    zeroPoint20: "",
    zeroPoint50: "",
    one: "",
    two: "",
  });

  const [notesAmounts, setNotesAmounts] = useState({
    twoHundred: "",
    oneHundred: "",
    fifty: "",
    twenty: "",
    ten: "",
    five: "",
  });

  const [coinAmounts, setCoinAmounts] = useState({
    twoEuro: "",
    oneEuro: "",
    fiftyCent: "",
    twentyCent: "",
    tenCent: "",
    fiveCent: "",
    twoCent: "",
    oneCent: "",
  });

  // Calculate total amount based on predefined values and user input quantities
  const calculateTotalCoinRolls = () => {
    const total =
      coinRollsAmounts.zeroPoint01 * 0.01 +
      coinRollsAmounts.zeroPoint02 * 0.02 +
      coinRollsAmounts.zeroPoint05 * 0.05 +
      coinRollsAmounts.zeroPoint10 * 0.1 +
      coinRollsAmounts.zeroPoint20 * 0.2 +
      coinRollsAmounts.zeroPoint50 * 0.5 +
      coinRollsAmounts.one * 1.0 +
      coinRollsAmounts.two * 2.0;

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

  return (
    <div>
      <TotalProvider>
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
      </TotalProvider>
    </div>
  );
}

export default App;
