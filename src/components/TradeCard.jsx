import { useNavigate } from "react-router-dom";

export function TradeCard({ trade }) {
  const navigate = useNavigate();

  return (
    <div className="border rounded-2xl shadow-md p-4 bg-white max-w-md mx-auto my-4">
      <h2 className="text-xl font-bold mb-2">
        {trade.instrument} - {trade.tradeType}
      </h2>

      <p><strong>Entry Date:</strong> {trade.entryDate}</p>
      <p><strong>Exit Date:</strong> {trade.exitDate}</p>
      <p><strong>Entry Price:</strong> {trade.entryPrice}</p>
      <p><strong>Exit Price:</strong> {trade.exitPrice}</p>
      <p><strong>Size:</strong> {trade.size}</p>
      <p><strong>Profit / Loss:</strong> ${trade.profitLoss}</p>
      <p><strong>Notes:</strong> {trade.notes}</p>

      {trade.strategies?.length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold">Strategie:</h3>
          <ul className="list-disc list-inside">
            {trade.strategies.map((strategy) => (
              <li key={strategy.id}>
                <strong>{strategy.name}:</strong> {strategy.description}
              </li>
            ))}
          </ul>
        </div>
      )}

      {trade.account && (
        <div className="mt-4">
          <h3 className="font-semibold">Account:</h3>
          <p><strong>Nome:</strong> {trade.account.name}</p>
          <p><strong>Broker:</strong> {trade.account.broker}</p>
          <p><strong>Valuta:</strong> {trade.account.currency}</p>
          <p><strong>Saldo Iniziale:</strong> ${trade.account.initialBalance}</p>
        </div>
      )}

      <button
        className="mt-6 text-lg font-semibold text-blue-600 hover:underline cursor-pointer"
        onClick={() => navigate(`/`)}
      >
        Torna indietro
      </button>
    </div>
  );
}
