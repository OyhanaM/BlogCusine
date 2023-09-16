import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Menu from "../components/Menu";

export default function Single() {
  return (
    <Layout>
      <div className="flex my-12 gap-8 w-full mx-12">
        <div className="contentReceipe">
          <img
            className="object-cover w-full h-96"
            src="/assets/images/cupcakes.jpg"
            alt="Cucpakes"
          />
          <div className="flex gap-3 mt-2">
            <Link to="/write?edit=2">
              <img
                className="h-8"
                src="/assets/logo/modif.png"
                alt="modifier"
              />
            </Link>
            <img className="h-8" src="/assets/logo/trash.png" alt="modifier" />
          </div>
          <h2 className="font-londrina text-green text-3xl mt-6">
            Lorem ipsum
          </h2>

          <p className="font-montserrat text-darkbrown text-lg mt-8 text-justify leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
        </div>
        <Menu />
      </div>
    </Layout>
  );
}
