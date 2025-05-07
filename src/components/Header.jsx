import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Trading Journal</h1>
        <ul className="flex gap-6">
          <li>
            <Link to="/" className="hover:text-gray-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/strategies" className="hover:text-gray-400 transition">
              Strategie
            </Link>
          </li>
          <li>
            <Link to="/accounts" className="hover:text-gray-400 transition">
              Accounts
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
