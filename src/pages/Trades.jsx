import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Trades() {
  const [trades, setTrades] = useState([]);

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

  console.log(trades);

  return <div>Sono pagina trades</div>;
}
