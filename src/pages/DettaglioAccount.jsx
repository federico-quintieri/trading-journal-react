import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

export function DettaglioAccount() {
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAccount = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`${API_URL}accounts/${id}`);
        setAccount(response.data);
      } catch (err) {
        console.error("Errore nel caricamento dell'account:", err);
        setError("Errore nel caricamento dell'account.");
      } finally {
        setLoading(false);
      }
    };

    fetchAccount();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center mt-10 text-gray-600">Caricamento...</div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-10">
        <p className="text-red-600">{error}</p>
        <button
          className="mt-4 inline-block text-amber-600 font-semibold hover:underline"
          onClick={() => navigate(`/accounts`)}
        >
          ← Torna alla lista accounts
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">{account.name}</h2>
      <div className="space-y-2 text-gray-700">
        <p>
          <span className="font-medium">Broker:</span> {account.broker}
        </p>
        <p>
          <span className="font-medium">Valuta:</span> {account.currency}
        </p>
        <p>
          <span className="font-medium">Saldo Iniziale:</span> $
          {account.initialBalance.toLocaleString()}
        </p>
        <p>
          <span className="font-medium">ID:</span> {account.id}
        </p>
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
