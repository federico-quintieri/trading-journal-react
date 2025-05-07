import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function DettaglioStrategia() {
  const [strategy, setStrategy] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  // Facciamo chiamata axios a mount del componente
  useEffect(() => {
    const fetchStrategy = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/strategies/${id}`
        );
        setStrategy(response.data);
      } catch (error) {
        console.error("Errore nel caricamento delle strategie:", error);
      }
    };

    fetchStrategy();
  }, [id]);

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
