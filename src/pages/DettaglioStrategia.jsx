import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

export function DettaglioStrategia() {
  const [strategy, setStrategy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  // Facciamo chiamata axios a mount del componente
  useEffect(() => {
    const fetchStrategy = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`${API_URL}strategies/${id}`);
        setStrategy(response.data);
      } catch (err) {
        setError("Errore nel caricamento della strategia.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStrategy();
  }, [id]);

  if (loading) {
    return <p className="text-center mt-10">Caricamento...</p>;
  }

  if (error) {
    return (
      <div className="text-center mt-10">
        <p className="text-red-600">{error}</p>
        <button
          className="mt-4 inline-block text-amber-600 font-semibold hover:underline"
          onClick={() => navigate(`/strategies`)}
        >
          ← Torna alla lista delle strategie
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">{strategy.name}</h2>
      <p className="text-gray-700 text-base">{strategy.description}</p>
      <button
        className="mt-6 inline-block text-amber-600 font-semibold hover:underline"
        onClick={() => navigate(`/strategies`)}
      >
        ← Torna alla lista delle strategie
      </button>
    </div>
  );
}
