import Layout from "../components/Layout";

export default function Home() {
  const article = [
    {
      id: 1,
      title: "Lorem nam",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/assets/images/cupcakes.jpg",
    },
    {
      id: 2,
      title: "Lorem nam",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/assets/images/cupcakes.jpg",
    },
    {
      id: 3,
      title: "Lorem nam",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/assets/images/cupcakes.jpg",
    },
    {
      id: 4,
      title: "Lorem nam",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/assets/images/cupcakes.jpg",
    },
  ];

  return (
    <Layout>
      <div className="home">
        <div className="flex flex-col my-12 gap-20 flex-wrap items-center mx-auto w-full max-w-screen-xl">
          {article.map((articles) => (
            <div className="articles" key={articles.id}>
              <div className="imageArticle">
                <img src={articles.image} alt={articles.title} />
                <div className="w-full h-full bg-peach absolute top-5 -left-5 -z-10" />
              </div>
              <div className="content">
                <h3 className="font-londrina font-black text-green text-3xl">
                  {articles.title}
                </h3>
                <p className="font-montserrat text-darkbrown text-lg">
                  {articles.description}
                </p>
                <button
                  type="button"
                  className=" border border-green font-londrina text-green max-w-max p-2 rounded-md hover:border-white hover:bg-peach hover:text-green"
                >
                  Voir la recette
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
