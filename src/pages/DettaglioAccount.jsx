import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export function DettaglioAccount() {
  const [account, setAccount] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/accounts/${id}`
        );
        setAccount(response.data);
      } catch (error) {
        console.error("Errore nel caricamento dell'account:", error);
      }
    };

    fetchAccount();
  }, [id]);

  if (!account) {
    return <div className="text-center mt-10 text-gray-600">Caricamento...</div>;
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">{account.name}</h2>
      <div className="space-y-2 text-gray-700">
        <p><span className="font-medium">Broker:</span> {account.broker}</p>
        <p><span className="font-medium">Valuta:</span> {account.currency}</p>
        <p><span className="font-medium">Saldo Iniziale:</span> ${account.initialBalance.toLocaleString()}</p>
        <p><span className="font-medium">ID:</span> {account.id}</p>
      </div>

      <button
        className="mt-6 inline-block text-amber-600 font-semibold hover:underline"
        onClick={() => navigate(`/accounts`)}
      >
        ← Torna alla lista accounts
      </button>
    </div>
  );
}
