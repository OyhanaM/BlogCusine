import Layout from "../components/Layout";

export default function Login() {
  return (
    <Layout>
      <h2>Connection</h2>

      <form>
        <label htmlFor="name">Nom d'utilisateur:</label>
        <input type="text" />
        <label htmlFor="password">Mot de passe:</label>
        <input type="password" />
        <button type="submit">Se connecter</button>
      </form>
    </Layout>
  );
}
