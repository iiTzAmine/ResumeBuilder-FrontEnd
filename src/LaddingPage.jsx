import React from 'react'
import Navbar from './Components/Navbar'
import "./LaddingPage.css"
import bgTop from "./assets/96dc5745ec0574bfb1d8f59f84d8e856.svg"
import axios from 'axios'
import { useEffect, useState } from 'react'



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
      <div className="__flex __center_items v | hero relative flex justify-center items-center pt-24 pb-10 pl-20">
        {/* <img src={bgTop} alt="" style={{width: "100vh", height: "auto", }}/> */}
        <div className="w-responsive-auto flex justify-center">
          <div className="container-cv w-full md:w-1/2 md:pr-8 hero__content z-10 relative flex flex-row justify-center md:justify-end items-center
        ">
            <div className="introduction">
              <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl dark:text-black">
              Générez gratuitement votre CV moderne et professionnel en ligne avec Cv Builder.</h1>
              <div data-v-7086bbf6="" data-v-6b658702=""
                className="TextStyle font-semibold TextStyle--body TextStyle--medium TextStyle--leading-normal">
                <p>En quelques minutes, créez <strong>votre CV gratuitement</strong>, choisissez un modèle,
                  personnalisez son design, puis<strong> téléchargez-le en PDF</strong>. Parcourez ensuite des offres
                  d’emploi ciblées, et organisez vos candidatures.</p>
              </div>
              <div className="flex flex-row justify-center sm:justify-start">
                <div className=" metrics flex flex-col sm:flex-row sm:justify-evenly mt-4 sm:mt-10 2xl:mt-12 mb-6 sm:mb-0  items-start sm:w-full
              ">
                  <div className="FeatureCard sm:pr-4 my-4 sm:my-0">
                    <div className="icon"><svg viewBox="0 0 33 36" fill="none" xmlns="http://www.w3.org/2000/svg"
                        className="Icon text-pink" height="32">
                        <g opacity="0.9">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M29.0809 0C30.7367 0 32.08 1.3433 32.08 2.99908V28.7512C32.08 29.2169 31.9725 29.675 31.7642 30.0946L29.1537 35.3075C28.9214 35.7786 28.4561 35.9997 28.0053 35.9734H0.999695C0.447579 35.9734 0 35.5258 0 34.9737C0 34.4216 0.447579 33.974 0.999695 33.974H26.3386L24.3966 30.0914C24.1901 29.6753 24.0824 29.2173 24.0824 28.7532V2.99908C24.0824 1.3433 25.4257 0 27.0815 0H29.0809ZM28.0801 32.9865L28.6744 34.1748C28.5071 34.0487 28.299 33.974 28.0734 33.974H27.5856L28.0801 32.9865ZM30.0582 28.9638H26.1041C26.1215 29.0457 26.1491 29.1251 26.1861 29.1997L28.0801 32.9863L29.9749 29.2024C30.0127 29.1264 30.0406 29.0463 30.0582 28.9638ZM30.0806 26.9644H26.0818V2.99908C26.0818 2.44754 26.53 1.99939 27.0815 1.99939H29.0809C29.6324 1.99939 30.0806 2.44754 30.0806 2.99908V26.9644Z">
                          </path>
                        </g>
                      </svg></div>
                    <div className="paragraph">
                      <div className="title font-bold mb-0 text-dark-500 dark:text-dark-400">3 500 000</div>
                      <div className="subtitle font-bold mb-0 text-dark-500 dark:text-dark-400">cv créés</div>
                    </div>
                  </div>
                  <div className="FeatureCard sm:px-2 my-4 sm:my-0">
                    <div className="icon"><svg viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                        className="Icon text-pink" height="32">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M16.7981 19.4254L16.7976 11.4818L27.315 8.66301C27.7418 8.54863 27.995 8.10994 27.8806 7.68316C27.7663 7.25639 27.3276 7.00314 26.9008 7.11753L16.7974 9.82537L16.7971 5.73188C16.7971 5.3694 17.0401 5.05268 17.3897 4.95911L29.8314 1.62946C30.2153 1.52655 30.4246 1.6798 30.4246 2.02787V25.5659C30.4246 26.0826 29.9551 26.6779 29.4174 26.8221L16.1951 30.3612C16.0165 30.4113 15.9718 30.411 15.8144 30.3655L2.60735 26.8221C2.06951 26.6779 1.60003 26.0826 1.60003 25.5659V2.02787C1.60003 1.6798 1.80939 1.52655 2.19287 1.62937L12.5289 4.40376C12.9556 4.51831 13.3944 4.26523 13.5089 3.8385C13.6235 3.41177 13.3704 2.97298 12.9437 2.85843L2.60745 0.0839765C1.22435 -0.286855 0 0.60942 0 2.02787V25.5659C0 26.8156 0.964081 28.038 2.19287 28.3675L15.385 31.9067C15.8117 32.0302 16.16 32.0329 16.6182 31.9043L29.8315 28.3676C31.0606 28.038 32.0247 26.8156 32.0247 25.5659V2.02787C32.0247 0.60942 30.8003 -0.286855 29.4174 0.0839175L16.9759 3.41349C15.9266 3.69443 15.1971 4.6452 15.1971 5.73194L15.1974 10.2542L14.1549 10.5336C13.7282 10.648 13.4749 11.0867 13.5893 11.5134C13.7037 11.9402 14.1424 12.1935 14.5691 12.0791L15.1976 11.9107L15.1981 19.8542L14.1549 20.1338C13.7282 20.2482 13.4749 20.6869 13.5893 21.1136C13.7037 21.5404 14.1424 21.7937 14.5691 21.6793L15.1982 21.5107L15.1987 27.9356C15.1987 28.3775 15.5569 28.7356 15.9988 28.7356C16.4406 28.7356 16.7988 28.3774 16.7987 27.9355L16.7982 21.0818L27.315 18.2632C27.7418 18.1488 27.995 17.7101 27.8806 17.2834C27.7663 16.8566 27.3276 16.6033 26.9008 16.7177L16.7981 19.4254ZM19.4576 15.5359L27.3777 13.4639C27.8052 13.352 28.0611 12.9149 27.9492 12.4874C27.8374 12.0599 27.4002 11.8041 26.9728 11.9159L19.0526 13.988C18.6252 14.0998 18.3693 14.537 18.4811 14.9644C18.593 15.3919 19.0301 15.6477 19.4576 15.5359ZM21.7392 24.5577L19.4223 25.1785C18.9955 25.2929 18.5569 25.0396 18.4425 24.6128C18.3281 24.1861 18.5814 23.7474 19.0082 23.633L21.325 23.0122C21.7518 22.8979 22.1905 23.1511 22.3049 23.5779C22.4192 24.0047 22.166 24.4434 21.7392 24.5577Z">
                        </path>
                      </svg></div>
                    <div className="paragraph">
                      <div className="title font-bold mb-0 text-dark-500 dark:text-dark-400">120 000</div>
                      <div className="subtitle font-bold mb-0 text-dark-500 dark:text-dark-400">nouveaux CV chaque mois</div>
                    </div>
                  </div>
                  <div className="FeatureCard sm:pl-4 my-4 sm:my-0">
                    <div className="icon"><svg viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"
                        className="Icon text-pink" height="32">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M9.34938 0.447862L7.12406 6.98076H0.700102C0.0194733 6.98076 -0.259988 7.85479 0.29324 8.25045L5.56308 12.003C5.78802 12.1632 6.10021 12.1107 6.26039 11.8858C6.42057 11.6608 6.36807 11.3486 6.14313 11.1885L1.63848 7.98076H7.2681C7.6099 7.98076 7.91565 7.76259 8.02505 7.43704L9.97733 1.70574L11.3167 5.64473C11.4056 5.90617 11.6896 6.04604 11.9511 5.95714C12.2125 5.86824 12.3524 5.58423 12.2635 5.32279L10.6065 0.449792C10.3999 -0.149609 9.55527 -0.149609 9.34938 0.447862ZM4.08816 19.8064C3.51298 20.3435 2.80534 19.6631 3.01763 19.0327L4.95263 13.3547C5.04171 13.0933 5.32581 12.9536 5.58719 13.0427C5.84857 13.1318 5.98825 13.4159 5.89917 13.6772L4.30533 18.3542L9.53574 14.1714C9.78836 13.9357 10.1707 13.9357 10.3903 14.1465L15.65 18.3558L13.5181 12.0996C13.4026 11.7639 13.5233 11.3925 13.8119 11.1887L18.3165 7.98096H12.4779C12.2018 7.98096 11.9779 7.7571 11.9779 7.48096C11.9779 7.20482 12.2018 6.98096 12.4779 6.98096H19.2549C19.9356 6.98096 20.2168 7.85617 19.6609 8.25125L14.5125 11.9174L16.9378 19.0344C17.1493 19.6627 16.4444 20.342 15.8956 19.8314L9.97874 15.0957L4.08816 19.8064ZM3.43455 19.0505L3.48745 19.0082C3.46965 19.0201 3.45197 19.0341 3.43455 19.0505ZM16.5478 19.0743C16.5288 19.0566 16.5096 19.0413 16.4903 19.0283L16.5478 19.0743Z">
                        </path>
                      </svg></div>
                    <div className="paragraph">
                      <div className="title font-bold mb-0 text-dark-500 dark:text-dark-400">99%</div>
                      <div className="subtitle font-bold mb-0 text-dark-500 dark:text-dark-400">de satisfaction utilisateur</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden 2xl:flex flex-col items-center mt-24">
                <div data-v-6b658702=""><a type="button" href="https://cvdesignr.com/fr/signup"
                    className="Button Button--primary Button--large"> <span className="Button__Content ">Créer mon
                      CV</span></a></div>
                <div className="mt-2">Inscription gratuite</div>
              </div>
            </div>
          </div>
          <div className="
          hidden
          md:flex md:w-1/2 md:pl-10
          hero__video
          relative
          z-10
          flex-row
          items-center
        ">
          
          <div className="cv-template1 relative z-10 flex-shrink-0">
            <img alt="Exemple de CV moderne" className="shadow1" data-src="https://cdn.cvdesignr.com/static/landing/uploads/d4ee025e-4287-4dba-97bf-dbddb6c3d756.jpeg" src="https://cdn.cvdesignr.com/static/landing/uploads/d4ee025e-4287-4dba-97bf-dbddb6c3d756.jpeg" lazy="loaded" />
          </div>
          <div className="cv-template2 relative z-1000 flex-shrink-0">
            <img alt="Exemple de CV moderne" className="shadow2" data-src="https://cdn.cvdesignr.com/static/landing/uploads/2ddda8bd-e2fd-43c5-a4b1-39be5d6fabf5.jpeg" src="https://cdn.cvdesignr.com/static/landing/uploads/2ddda8bd-e2fd-43c5-a4b1-39be5d6fabf5.jpeg" lazy="loaded" />
          </div>
            <div className="background-cv-template flex-shrink-0"></div>
          </div>
        </div>
      </div>
    </div>

  </body>

</div>
)
}

export default LaddingPage