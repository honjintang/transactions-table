import BrowserWindow from "./components/BrowserWindow/BrowserWindow";
import Transactions from "./components/Transactions/Transactions";

function App() {
  return (
    <div id="app-container">
      <BrowserWindow>
        <Transactions />
      </BrowserWindow>
    </div>
  );
}

export default App;
