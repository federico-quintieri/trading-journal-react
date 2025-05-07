export function TradeCard({ trade }) {
  return (
    <div className="border rounded-2xl shadow-md p-4 bg-white max-w-md mx-auto my-4">
      <h2 className="text-xl font-bold mb-2">
        {trade.instrument} - {trade.tradeType}
      </h2>
      <p>
        <strong>Entry Date:</strong> {trade.entryDate}
      </p>
      <p>
        <strong>Exit Date:</strong> {trade.exitDate}
      </p>
      <p>
        <strong>Entry Price:</strong> {trade.entryPrice}
      </p>
      <p>
        <strong>Exit Price:</strong> {trade.exitPrice}
      </p>
      <p>
        <strong>Size:</strong> {trade.size}
      </p>
      <p>
        <strong>Profit / Loss:</strong> ${trade.profitLoss}
      </p>
      <p>
        <strong>Notes:</strong> {trade.notes}
      </p>
    </div>
  );
}
