import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { TradeCard } from "../components/TradeCard";

export function DettaglioTrade() {
  const [trade, setTrade] = useState([]);
  const { id } = useParams();

  // Facciamo chiamata axios a mount del componente
  useEffect(() => {
    const fetchTrades = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/trades/${id}`
        );
        setTrade(response.data);
      } catch (error) {
        console.error("Errore nel caricamento delle trades:", error);
      }
    };

    fetchTrades();
  }, [id]);

  return (
    <>
      <TradeCard trade={trade} />
    </>
  );
}
