function Menu() {
  const articles = [
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
    <div className="menuReceipe">
      <h2 className="font-londrina text-brown text-xl">
        VOUS POURRIEZ AUSSI AIMER:
      </h2>
      {articles.map((article) => (
        <div key={article.id}>
          <img
            className="mt-2 w-full h-52 object-cover"
            src={article.image}
            alt={article.title}
          />
          <h3 className="font-londrina text-green text-xl mt-2">
            {article.title}
          </h3>
          <button
            className=" border border-peach font-londrina text-darkbrown max-w-max p-2 rounded-md hover:border-white hover:bg-peach hover:text-darkbrown mt-2 mx-auto"
            type="button"
          >
            Voir la recette
          </button>
        </div>
      ))}
    </div>
  );
}

export default Menu;
