import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import { NoPage } from "./pages/NoPage";
import { Trades } from "./pages/Trades";
import { Accounts } from "./pages/Accounts";
import { Strategies } from "./pages/Strategies";
import { DettaglioTrade } from "./pages/DettaglioTrade";
import { DettaglioAccount } from "./pages/DettaglioAccount";
import { DettaglioStrategia } from "./pages/DettaglioStrategia";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Trades />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="strategies" element={<Strategies />} />
          <Route path="trades/:id" element={<DettaglioTrade />} />
          <Route path="accounts/:id" element={<DettaglioAccount />} />
          <Route path="strategies/:id" element={<DettaglioStrategia />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
