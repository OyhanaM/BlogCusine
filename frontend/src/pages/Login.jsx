import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-beige">
      <h2 className="mb-5 text-2xl text-green font-londrina font-black">
        Connection
      </h2>
      <form className="flex flex-col items-center gap-5 bg-white rounded-lg w-72 p-5">
        <input
          required
          className="border-grey border-b-2 p-2"
          type="text"
          placeholder="Nom d'utilisateur"
        />

        <input
          required
          className="border-grey border-b-2 p-2"
          type="password"
          placeholder="Mot de passe"
        />

        <button
          type="submit"
          className="bg-green text-white p-2 cursor-pointer rounded-lg mt-2 font-montserrat text-md"
        >
          Se connecter
        </button>
        <Link
          to="/register"
          className="text-sm text-brown text-center font-montserrat font-light"
        >
          Créer un compte
        </Link>
      </form>
    </div>
  );
}
