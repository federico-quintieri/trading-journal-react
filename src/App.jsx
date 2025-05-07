import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import { NoPage } from "./pages/NoPage";
import { Trades } from "./pages/Trades";
import { Accounts } from "./pages/Accounts";
import { Strategies } from "./pages/Strategies";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Trades />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="strategies" element={<Strategies />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
