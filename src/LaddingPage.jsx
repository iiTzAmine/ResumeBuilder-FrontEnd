import React from "react";
import Navbar from "./Components/Navbar";
import "./LaddingPage.css";
import bgTop from "./assets/96dc5745ec0574bfb1d8f59f84d8e856.svg";
import axios from "axios";
import { useEffect, useState } from "react";

function LaddingPage() {
  // let [respHello, setRespHello] = useState('')

  // // 3. Create out useEffect function
  // useEffect(() => {
  // fetch('http://localhost:8080/api/v1')
  // .then(response => response.json())
  // // 4. Setting *dogImage* to the image url that we received from the response above
  // .then(data => setRespHello(data.message))
  // },[])

  return (
    <div>
      <Navbar />

      <body>
        <div className="homepage">
          {/* pt-24 pb-10 pl-28  */}
          <div className=" v | relative flex justify-center items-center w-100">
            {/* <img src={bgTop} alt="" style={{width: "100vh", height: "auto", }}/> */}
            <div className="w-responsive-auto flex justify-center w-4/5">
              <div className="_first_part w-full md:w-1/2 md:pr-8 hero__content z-10 relative flex flex-row justify-center md:justify-end items-center">
                <div className="introduction">
                  <h1 className="mb-4 mt-32 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl dark:text-black">
                    Générez gratuitement votre CV moderne et professionnel en
                    ligne avec Cv Builder.
                  </h1>
                  <div
                    data-v-7086bbf6=""
                    data-v-6b658702=""
                    className="TextStyle font-semibold TextStyle--body TextStyle--medium TextStyle--leading-normal"
                  >
                    <p>
                      En quelques minutes, créez{" "}
                      <strong>votre CV gratuitement</strong>, choisissez un
                      modèle, personnalisez son design, puis
                      <strong> téléchargez-le en PDF</strong>. Parcourez ensuite
                      des offres d’emploi ciblées, et organisez vos
                      candidatures.
                    </p>
                  </div>
                  <div className="flex flex-row justify-center sm:justify-start">
                    <div
                      className=" metrics flex flex-col sm:flex-row sm:justify-evenly mt-4 sm:mt-10 2xl:mt-12 mb-6 sm:mb-0  items-start sm:w-full"
                    >
                      <div className="FeatureCard sm:pr-4 my-4 sm:my-0">
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 128 128"
                            width="3em"
                            height="3em"
                          >
                            <defs>
                              <path
                                id="notoPen0"
                                fill="none"
                                d="m123.11 17l-.1-.1c1.19-2.58-.4-5.56-3.18-8.24c-2.78-2.68-5.76-4.37-8.24-3.18l-.1-.1S88.07 21.75 63.07 47.95c-.69.79-.69 1.98 0 2.68l14.88 14.88c.69.69 1.89.79 2.68 0C106.74 40.42 123.11 17 123.11 17"
                              />
                            </defs>
                            <path
                              fill="#bdbdbd"
                              d="M11.83 121.98c5.36-2.78 13.09-8.23 23.31-16.66l-12.1-12c-8.33 10.12-13.78 17.85-16.56 23.31c2.97.09 5.25 2.47 5.35 5.35"
                            />
                            <path
                              fill="#616161"
                              d="M4.88 123.56c.79.79 2.58.5 5.26-.79c.5-.2 1.09-.5 1.59-.79a5.536 5.536 0 0 0-5.36-5.36c-.3.6-.6 1.09-.79 1.59c-1.19 2.68-1.39 4.56-.7 5.35"
                            />
                            <path
                              fill="#eee"
                              d="M11.91 113.51c-.16.14-.33.28-.5.43c-.31.26-.68.54-1.08.44c.18-.73.57-1.39.95-2.04c2.78-4.7 4.81-8.29 8.83-12.06c.27-.25.57-.51.93-.57c.59-.09 1.11.39 1.43.88c.33.5.86 1.45.77 2.08c-.09.67-.83 1.07-1.33 1.52c-3.65 3.29-6.26 6.09-10 9.32"
                            />
                            <path
                              fill="#bdbdbd"
                              d="M107.87 7.78c-1.01-.89-2.8-2.52-2.8-2.52c-1.01-.89-2.33-1.33-3.71-1.25c-1.38.09-2.63.69-3.5 1.67c-3.99 3.9-7.99 7.8-11.98 11.7c-5.44 5.32-18.63 18.25-19.51 19.35c-.88 1.11-.29 1.73-.19 1.84c1.32 1.45 3.69 1.65 5.42.71c1.72-.94 2.81-2.81 3.13-4.75c.21-1.26.29-1.89 1.22-2.71c.34-.3 19.29-17.99 22.19-21.29c.48-.55 1.92-1.7 3.5-.49c.25.19 5.73 4.81 5.73 4.81l3.49-3.96l-.01-.23c-.02-.27-.02-.27-2.98-2.88"
                            />
                            <path
                              fill="#ff7900"
                              d="m73.4 55l-7.64-7.64C34.62 78.91 23.67 91.02 20.98 94.49c-.47.61-.42 1.47.13 2.02l10.87 10.48c.55.55 1.41.6 2.02.13c3.47-2.69 15.6-13.23 47.14-44.37c-.1-.11-7.74-7.75-7.74-7.75"
                            />
                            <use href="#notoPen0" />
                            <path
                              fill="#757575"
                              d="M104.91 10.47c-.62-.96-2.13-2.32-3.17-2.79c-1.19-.53-2.07-.01-2.83.66c-1.34 1.18-10.25 10.43-12.2 12.86c-.22.28-.45.59-.45.94c5.09-4.83 10.27-9.6 11.92-11.03c1.26-1.09 2.48-2.06 3.47-1.07c.1.1.79.65 2.04 1.7z"
                            />
                            <path
                              fill="#ff7900"
                              d="M123.11 17c1.23-1.77-.5-5.66-3.27-8.34c-2.78-2.68-6.57-4.54-8.34-3.27c-1.76 1.27-23.42 16.37-48.42 42.57c-.69.79-.69 1.98 0 2.68l14.88 14.88c.69.69 1.89.79 2.68 0c26.1-25.1 41.25-46.75 42.47-48.52"
                            />
                            <path
                              fill="#f8ab68"
                              d="M29.36 94.04c-1.11.87-4.4 2.43-1.87-1.53c.6-.93 2.63-3.44 3.49-4.45c3.31-3.92 22.27-23.09 25.64-26.63c2.74-2.88 5.16-3.58 5.95-1.58c.54 1.38-.58 2.98-6.42 9.2c-4.86 5.16-21.04 20.44-26.79 24.99m54.37-53.09s-3.51 4.24-6.06 2.09c-2.02-1.71 2.66-5.76 2.66-5.76c.12-.13 16.17-15.21 20.94-19.04c1.96-1.58 4.46-3.34 5.15-2.73c.69.61-.45 2.55-3.46 5.54c-3.02 2.99-19.12 19.78-19.23 19.9"
                            />
                            <use href="#notoPen0" />
                            <path
                              fill="#eee"
                              d="M72.33 32.5c-.78.51-.47 2.84-.95 4.03c-.39.95-.38 1.45.42 1.21c.85-.26 1.8-1.54 1.8-3.53c-.01-.97-.46-2.25-1.27-1.71"
                            />
                            <path
                              fill="#ff7900"
                              d="m104.05 10.92l-.9.7c2.1 1.29 4.75 3.28 7.48 6.01c1.21 1.21 2.88 3.14 3.46 4.31c.54 1.11.74 2.81.28 4.4c-.5 1.73-1.29 2.51-1.61 4.27c1.59-1.97 4.8-6.08 4.8-6.08s-1.39-3.57-6.14-8.33s-7.37-5.28-7.37-5.28"
                            />
                            <path
                              fill="#ff7900"
                              d="M119.84 8.66c-2.15-2.07-4.9-3.65-6.85-3.68c0 0 3.51 1.88 5.53 4.51c2.14 2.78 3.53 5.31 2.57 6.9c-1.6 2.3-15.78 22.43-40.78 46.66a.964.964 0 0 1-1.48-.16c-1.42-2.19-3.32-4.5-6.16-7.33c-4.06-4.06-6.68-5.89-9.73-7.43c0 0-.7.37-.88 1.6c-.12.79-.05 1.43-.05 1.43l.86-.79c2.39 1.34 5.3 3.5 8.4 6.61c1.33 1.33 2.53 2.67 3.57 3.96c.14.26 1.18 2.46-.95 5.87c0 0-.32.41-.8 1.05c-25.03 24.55-36.67 35.02-38.96 36.58c-2.4 1.63-3.67 1.08-3.67 1.08c.3.3.96 1.04 1.7 1.62c.75.59 1.56.19 1.83-.03c2.9-2.25 11.84-9.97 33.07-30.58c.03-.03.06-.05.08-.08c3.12-3.03 6.51-6.34 10.18-9.95c.02 0 .65.07 1.43-.05c1.22-.18 1.68-.75 1.68-.75v-.01c.07-.05.14-.11.21-.17c26.1-25.1 41.24-46.75 42.47-48.52s-.49-5.66-3.27-8.34"
                            />
                            <path
                              fill="#ffc107"
                              d="M77.08 51.17c-3.07-3.07-6.64-5.88-9.83-7.51c0 0-.79-.05-1.53.77c-.56.62-.69 1.5-.69 1.5c2.42 1.07 5.96 3.36 9.95 7.34c3 3 5.44 6.16 6.87 8.92c.29.56.51 1.05.68 1.5c0 0 .88.01 1.62-.63c.83-.73.66-1.61.66-1.61c-1.58-3.31-4.51-7.06-7.73-10.28"
                            />
                            <path
                              fill="#bdbdbd"
                              d="M115.15 13.11c-2.07-2.07-4.37-4.01-6.62-5.56c0 0-1.54-.59-2.95.71s-1.52 2.67-1.52 2.67c2.1 1.29 4.61 3.21 7.34 5.94c2.55 2.55 4.69 5.23 6.16 7.67c0 0 1.56-.12 2.66-1.43s.71-3.05.71-3.05c-1.58-2.37-3.61-4.78-5.78-6.95"
                            />
                            <path
                              fill="#eee"
                              d="M107.19 8.77c-.53.11-1.03.52-1.06 1.06c-.03.55.41.99.82 1.36c1.28 1.16 2.61 2.34 4.25 2.89c.36.12.83.19 1.08-.1c.16-.18.17-.45.15-.69c-.08-.99-.58-1.9-1.23-2.65c-1.02-1.16-2.36-2.21-4.01-1.87"
                            />
                          </svg>
                        </div>
                        <div className="paragraph">
                          <div className="title font-bold text-xl mb-0 text-dark-500 dark:text-dark-400">
                            3 500 000
                          </div>
                          <div className="subtitle font-bold text-xs mb-0 text-dark-500 dark:text-dark-400">
                            cv créés
                          </div>
                        </div>
                      </div>
                      <div className="FeatureCard sm:px-2 my-4 sm:my-0">
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            width="3em"
                            height="3em"
                          >
                            <path
                              fill="#ff7900"
                              d="M19 10h7v2h-7zm0 5h7v2h-7zm0 5h7v2h-7zM6 10h7v2H6zm0 5h7v2H6zm0 5h7v2H6z"
                            />
                            <path
                              fill="#ff7900"
                              d="M28 5H4a2.002 2.002 0 0 0-2 2v18a2.002 2.002 0 0 0 2 2h24a2.002 2.002 0 0 0 2-2V7a2.002 2.002 0 0 0-2-2M4 7h11v18H4Zm13 18V7h11v18Z"
                            />
                          </svg>
                        </div>
                        <div className="paragraph">
                          <div className="title font-bold text-xl mb-0 text-dark-500 dark:text-dark-400">
                            120 000
                          </div>
                          <div className="subtitle font-bold text-xs mb-0 text-dark-500 dark:text-dark-400">
                            nouveaux CV chaque mois
                          </div>
                        </div>
                      </div>
                      <div className="FeatureCard sm:pl-4 my-4 sm:my-0">
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="3em"
                            height="3em"
                          >
                            <path
                              fill="none"
                              stroke="#ff7900"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m12 2l3.104 6.728l7.358.873l-5.44 5.03l1.444 7.268L12 18.28L5.534 21.9l1.444-7.268L1.538 9.6l7.359-.873z"
                            />
                          </svg>
                        </div>
                        <div className="paragraph">
                          <div className="title font-bold text-xl mb-0 text-dark-500 dark:text-dark-400">
                            99%
                          </div>
                          <div className="subtitle font-bold text-xs mb-0 text-dark dark:text-dark">
                            de satisfaction utilisateur
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="2xl:flex flex-col items-center mt-24">
                    <div data-v-6b658702="">
                      <a
                        type="button"
                        href="#"
                        className="Button Button--primary Button--large "
                      >
                        <span className="__btn_creer_cv __Helvetica--900 ">
                          Créer SON CV
                        </span>
                      </a>
                    </div>
                    <div className="__Helvetica--400 | mt-3 font-bold">
                      Inscription gratuite
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="
          __secind_part
          md:flex md:w-1/2 md:pl-10
          hero__video
          relative
          z-10
          flex-row
          items-center
        "
              >
                <div className="cv-1 relative z-10 flex-shrink-0">
                  <img
                    alt="Exemple de CV moderne"
                    className="shadow"
                    data-src="https://cdn.cvdesignr.com/static/landing/uploads/d4ee025e-4287-4dba-97bf-dbddb6c3d756.jpeg"
                    src="https://cdn.cvdesignr.com/static/landing/uploads/d4ee025e-4287-4dba-97bf-dbddb6c3d756.jpeg"
                    lazy="loaded"
                  />
                </div>
                <div className="cv-2 relative z-1000 flex-shrink-0">
                  <img
                    alt="Exemple de CV moderne"
                    className="shadow"
                    data-src="https://cdn.cvdesignr.com/static/landing/uploads/2ddda8bd-e2fd-43c5-a4b1-39be5d6fabf5.jpeg"
                    src="https://cdn.cvdesignr.com/static/landing/uploads/2ddda8bd-e2fd-43c5-a4b1-39be5d6fabf5.jpeg"
                    lazy="loaded"
                  />
                </div>
                {/* <div className="background-cv-template flex-shrink-0"></div> */}
              </div>
            </div>
          </div>

          <div className="__savoir_plus_container| w-100 flex mt-5 flex-col justify-center items-center">
            <div>
              <span className="__Helvetica--900 | font-extrabold ">
                En savoir plus
              </span>
            </div>
            <div>
              <svg
                className="__arrow_down"
                xmlns="http://www.w3.org/2000/svg"
                width="4em"
                height="4em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ff7900"
                  d="M5.8 9.7L12 16l6.2-6.3c.2-.2.3-.5.3-.7s-.1-.5-.3-.7c-.2-.2-.4-.3-.7-.3h-11c-.3 0-.5.1-.7.3c-.2.2-.3.4-.3.7s.1.5.3.7"
                />
              </svg>
            </div>
          </div>

          <div className="| w-100 flex flex-col justify-center items-center mt-4">
            <span className="| font-extrabold">
              Comment ça marche, <strong className="|">CVDesignR ?</strong>
            </span>
            <span className="font-medium mt-1">
              Nous simplifions le parcours candidat à un niveau inégalé
            </span>
            <div
              data-v-6b658702=""
              class="
            flex flex-col
            items-start
            md:flex-row md:justify-center
            steps
            mx-auto
            xl:w-3/4
            mt-6
            md:mt-20
          "
            >
              <div
                class="
              w-full
              md:w-1/3
              step
              flex flex-col
              items-center
              mt-12
              md:mt-0
            "
              >
                <div
                  data-v-6b658702=""
                  class="cursor-pointer StepCard | flex flex-col "
                >
                  <div class="number">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10em"
                      height="10em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="#ff7900"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M12.438 17V7L9 9.5"
                      />
                    </svg>
                  </div>
                  <div class="paragraph">
                    <div class="__Helvetica--900">Créer moi-même mon CV</div>
                    <div class="__Helvetica--400">
                      et le télécharger en PDF, ou en version web
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-v-6b658702=""
                class="
              w-full
              md:w-1/3
              step
              flex flex-col
              items-center
              mt-12
              md:mt-0
            "
              >
                <div
                  data-v-6b658702=""
                  class="cursor-pointer StepCard | flex flex-col"
                >
                  <div class="number">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10em"
                      height="10em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="#ff7900"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M8.75 9.92c0-3.894 5.77-3.894 5.77 0c0 2.94-3.77 5.476-5.77 7.08c0 0 3.75-.625 6.25 0"
                      />
                    </svg>
                  </div>
                  <div class="paragraph">
                    <div class="__Helvetica--900">Me faire remarquer</div>
                    <div class="__Helvetica--400">
                      par les recruteurs en un seul clic
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-v-6b658702=""
                class="
              w-full
              md:w-1/3
              step
              flex flex-col
              items-center
              mt-12
              md:mt-0
            "
              >
                <div
                  data-v-6b658702=""
                  class="cursor-pointer StepCard | flex flex-col"
                >
                  <div class="number">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10em"
                      height="10em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="#ff7900"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M8.75 9.493c0-3.324 6.25-3.324 6.25 0c0 0 0 2.507-3.125 2.507C15 12 15 14.507 15 14.507c0 3.324-6.25 3.324-6.25 0"
                      />
                    </svg>
                  </div>
                  <div class="paragraph">
                    <div class="__Helvetica--900">
                      Trouver des offres d’emploi
                    </div>
                    <div class="__Helvetica--400">
                      qui me correspondent, postuler et m’organiser
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default LaddingPage;
