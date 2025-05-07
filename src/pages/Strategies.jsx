import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Strategies() {
  const [strategies, setStrategies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStrategies = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/strategies");
        setStrategies(response.data);
      } catch (error) {
        console.error("Errore nel caricamento delle strategie:", error);
      }
    };

    fetchStrategies();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Lista Strategie</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-2xl shadow-md">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-3 border-b">ID</th>
              <th className="px-4 py-3 border-b">Nome</th>
              <th className="px-4 py-3 border-b">Descrizione</th>
            </tr>
          </thead>
          <tbody>
            {strategies.map((strategy) => (
              <tr
                key={strategy.id}
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() => navigate(`/strategies/${strategy.id}`)}
              >
                <td className="px-4 py-3 border-b">{strategy.id}</td>
                <td className="px-4 py-3 border-b text-blue-600 hover:underline">
                  {strategy.name}
                </td>
                <td className="px-4 py-3 border-b">{strategy.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
