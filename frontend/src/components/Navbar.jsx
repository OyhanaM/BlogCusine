import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-beige flex justify-between px-5">
      <Link to="/">
        {" "}
        <img
          className="h-16"
          src="/assets/logo/logo.png"
          alt="logo Milkees baking club"
        />
      </Link>
      <ul className="flex justify-center items-center gap-6 font-montserrat font-light text-md text-darkbrown">
        <Link to="/?cat=sucrees">
          <li>RECETTES SUCREES</li>
        </Link>
        <Link to="/?cat=salees">
          <li>RECETTES SALEES</li>
        </Link>
        <Link to="/?cat=batch">
          <li>BATCH COOKING</li>
        </Link>
        <span>John</span>
        <span>Logout</span>
        <Link to="/write">
          <span className="bg-yellow rounded-full p-1.5 border border-beige hover:bg-beige hover:border hover:border-yellow">
            Write
          </span>
        </Link>
      </ul>
    </div>
  );
}
