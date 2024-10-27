import CoinRolls from "./components/CoinRolls";
import Coins from "./components/Coins";
import Notes from "./components/Notes";
import { TotalProvider, useTotalContext } from "./components/TotalContext";

function App() {
  return (
    <div>
      <TotalProvider>
        <div className="p-8 text-xl font-bold text-center bg-orange-300">
          GESAMT BETRAG :<br></br> 36598€
        </div>
        <Notes />
        <CoinRolls />
        <Coins />
      </TotalProvider>
    </div>
  );
}

export default App;
