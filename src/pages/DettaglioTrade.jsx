import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { TradeCard } from "../components/TradeCard";

const API_URL = import.meta.env.VITE_API_URL;

export function DettaglioTrade() {
  const [trade, setTrade] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  // Facciamo chiamata axios a mount del componente
  useEffect(() => {
    const fetchTrade = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`${API_URL}trades/${id}`);
        setTrade(response.data);
      } catch (err) {
        console.error("Errore nel caricamento del trade:", err);
        setError("Errore nel caricamento del trade.");
      } finally {
        setLoading(false);
      }
    };

    fetchTrade();
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
          onClick={() => navigate("/")}
        >
          ← Torna alla lista trades
        </button>
      </div>
    );
  }

  return (
    <>
      <TradeCard trade={trade} />
    </>
  );
}
