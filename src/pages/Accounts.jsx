import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Accounts() {
  const [accounts, setAccounts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/accounts");
        setAccounts(response.data);
      } catch (error) {
        console.error("Errore nel caricamento degli account:", error);
      }
    };

    fetchAccounts();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Lista Account</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-2xl shadow-md">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-3 border-b">ID</th>
              <th className="px-4 py-3 border-b">Nome</th>
              <th className="px-4 py-3 border-b">Broker</th>
              <th className="px-4 py-3 border-b">Valuta</th>
              <th className="px-4 py-3 border-b">Saldo Iniziale</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((account) => (
              <tr
                key={account.id}
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() => navigate(`/accounts/${account.id}`)}
              >
                <td className="px-4 py-3 border-b">{account.id}</td>
                <td className="px-4 py-3 border-b text-blue-600 hover:underline">
                  {account.name}
                </td>
                <td className="px-4 py-3 border-b">{account.broker}</td>
                <td className="px-4 py-3 border-b">{account.currency}</td>
                <td className="px-4 py-3 border-b">${account.initialBalance.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
