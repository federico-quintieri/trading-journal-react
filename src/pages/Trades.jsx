import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Trades() {
  const [trades, setTrades] = useState([]);
  const navigate = useNavigate();

  // Facciamo chiamata axios a mount del componente
  useEffect(() => {
    const fetchTrades = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/trades");
        setTrades(response.data);
      } catch (error) {
        console.error("Errore nel caricamento delle trades:", error);
      }
    };

    fetchTrades();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Lista dei Trades</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trades.map((trade) => (
          <div
            key={trade.id}
            className="bg-white rounded-2xl shadow-md p-4 border border-gray-200"
          >
            <h3
              className="text-lg font-semibold mb-2 text-blue-600 hover:underline cursor-pointer"
              onClick={() => navigate(`/trades/${trade.id}`)}
            >
              {trade.instrument}
            </h3>

            <p>
              <span className="font-medium">Tipo:</span> {trade.tradeType}
            </p>
            <p>
              <span className="font-medium">Entry:</span> {trade.entryDate} @{" "}
              {trade.entryPrice}
            </p>
            <p>
              <span className="font-medium">Exit:</span> {trade.exitDate} @{" "}
              {trade.exitPrice}
            </p>
            <p>
              <span className="font-medium">Profit/Loss:</span>{" "}
              <span
                className={
                  trade.profitLoss >= 0 ? "text-green-600" : "text-red-600"
                }
              >
                {trade.profitLoss}
              </span>
            </p>
            <p>
              <span className="font-medium">Size:</span> {trade.size}
            </p>
            {trade.notes && (
              <p className="mt-2 text-sm text-gray-600">📝 {trade.notes}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
