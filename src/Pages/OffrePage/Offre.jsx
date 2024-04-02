import React from "react";
import Navbar from "../../Components/NavBar/Navbar";

function Offre() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-[80vh] | bg-gradient-to-r from-[#ff7700b0] to-[#ff770076]">
        <div className="flex flex-col w-[40%]">
          <h1 className="text-black text-4xl font-bold">Des millions d’offres d’emploi diffusées sur-mesure.</h1>
          <div className="">
            <p className="mt-4">
              Nous agrégeons des offres d’emploi depuis de nombreux canaux pour
              vous ouvrir au maximum d’opportunités dans tous les secteurs et
              partout en France.
            </p>
            <p>
              Obtenez automatiquement des suggestions en fonction de votre
              parcours et votre projet professionnel.
            </p>
          </div>
          <div className="">
            <button>Rechercher des Offres</button>
            <p>Vous serez amené à créer votre CV avant d’accéder aux offres</p>
          </div>
        </div>

        <div className="">
          <img
            src="https://cdn.cvdesignr.com/static/landing/uploads/f234b139-4226-4bf8-b4a1-afab03034392.svg"
            alt=""
          />
        </div>
      </div>
      <div className="">
        <div className="">
          <div className="">
            <h1>Nous importons chaque jour des milliers d’offres d’emploi</h1>
            <p>
              Les données des offres sont structurées pour en tirer le maximum
              d’informations. Ne passez plus à côté d'opportunités
              professionnelles et parcourez les offres depuis votre espace
              CVDesignR. Emploi, alternance et stage, trouvez le poste idéal.
            </p>
          </div>
          <div className="">
            <img
              src="https://cdn.cvdesignr.com/static/landing/uploads/7c1f4d31-dfe0-43c6-80ae-fc9355ba7d58.svg"
              alt=""
            />
          </div>
        </div>
        <div className="">
          <div className="">
            <img
              src="https://cdn.cvdesignr.com/static/landing/uploads/947f7bf2-637c-4dd0-8dc7-18261566ad34.svg"
              alt=""
            />
          </div>
          <div className="">
            <h1>Vos CV sont automatiquement analysés à tout instant</h1>
            <p>
              À partir des données de vos CV, nous vous proposons des offres
              d’emploi qui sont susceptibles de vous intéresser. De quoi vous
              faire gagner du temps dans votre recherche. Vos CV travaillent
              pour vous.
            </p>
          </div>
        </div>
      </div>
      <div class="">
        <svg
          width="19"
          height="78"
          viewBox="0 0 19 78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class=""
        >
          <line
            x1="9.5"
            y1="2.18556e-08"
            x2="9.5"
            y2="76"
            stroke="black"
          ></line>
          <line
            x1="9.1318"
            y1="76.8389"
            x2="0.646517"
            y2="68.3536"
            stroke="black"
          ></line>
          <line
            x1="17.8389"
            y1="68.3536"
            x2="9.35362"
            y2="76.8388"
            stroke="black"
          ></line>
        </svg>
      </div>
      <div className="">
        <div className="">
          <h1 className="">Recevez des offres d'emploi sur-mesure</h1>
          <img
            src="https://cdn.cvdesignr.com/static/landing/uploads/d7db3a00-389e-4b2d-bb73-f18190c40017.svg"
            alt=""
          />
          <button className="">rechercher des offres</button>
          <p>Vous serez amené à créer votre CV avant d’accéder aux offres</p>
        </div>
      </div>
    </div>
  );
}

export default Offre;
