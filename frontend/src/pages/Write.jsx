import { useState } from "react";
import ReactQuill from "react-quill";
import Layout from "../components/Layout";
import "react-quill/dist/quill.snow.css";

export default function Write() {
  const [value, setValue] = useState("");

  return (
    <Layout>
      <div className="flex my-12 mx-12">
        <div className="writing">
          <input
            className="border-2 border-grey mb-5"
            type="text"
            placeholder="Titre"
          />
          <div className="overflow-scroll border border-grey">
            <ReactQuill
              className="h-72"
              theme="snow"
              value={value}
              onChange={setValue}
            />
          </div>
        </div>
        <div className="writingMenu">
          <div className="item">
            <h2 className="font-londrina text-green text-xl mb-2 ">
              Publication
            </h2>
            <input className="hidden" type="file" id="file" />
            <label
              className="font-montserrat text-darkbrown text-xl cursor-pointer"
              htmlFor="file"
            >
              Ajouter image
            </label>

            <div className="flex justify-around my-4">
              <button
                className="bg-green font-montserrat rounded-md p-1 text-beige"
                type="button"
              >
                Sauvegarder
              </button>
              <button
                className="bg-peach font-montserrat rounded-md p-1 text-darkbrown"
                type="button"
              >
                Mettre à jour
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2 border border-grey p-2">
            <div>
              <h2 className="font-londrina text-green text-xl mb-2">
                Catégories
              </h2>
              <input type="radio" name="cat" value="sucrees" id="sucrees" />
              <label
                className="font-montserrat text-darkbrown ml-1 text-xl"
                htmlFor="sucrees"
              >
                Recette sucrée
              </label>
            </div>
            <div>
              <input type="radio" name="cat" value="salees" id="salees" />
              <label
                className="font-montserrat text-darkbrown ml-1 text-xl"
                htmlFor="salée"
              >
                Recette salée
              </label>
            </div>
            <div>
              <input type="radio" name="cat" value="batch" id="batch" />
              <label
                className="font-montserrat text-darkbrown ml-1 text-xl"
                htmlFor="batch"
              >
                Batch cooking
              </label>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
