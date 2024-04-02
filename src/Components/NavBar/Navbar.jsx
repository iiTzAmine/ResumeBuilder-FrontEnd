import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="bg-black border-gray-200 dark:bg-gray-900 pb-3">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <Link
          href="https://flowbite.com/"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src={window.location.origin + "/orangeLogo.png"}
            class="h-14 pl-10"
            alt="Orange Logo"
          />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Orange <br /> Digitale Center
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div class="hidden w-full xl:block xl:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 xl:p-0 mt-4 rounded-lg bg-black xl:flex-row xl:space-x-8 rtl:space-x-reverse xl:mt-0 xl:border-0 xl:bg-white dark:bg-gray-800 xl:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to={'/'}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-orange-700 xl:p-0 dark:text-white xl:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent xl:decoration-slate-100"
                aria-current="page"
              >
                Accueil
              </Link>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-orange-700 xl:p-0 dark:text-white xl:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent"
              >
                Créer CV
              </a>
            </li>
            <li>
              <Link
                to={"/offre"}
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-orange-700 xl:p-0 dark:text-white xl:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent"
              >
                Offre D'emploi
              </Link>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-orange-700 xl:p-0 dark:text-white xl:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent"
              >
                À propos
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-orange-700 xl:p-0 dark:text-white xl:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-8 text-gray-900 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-orange-700 xl:p-0 dark:text-white xl:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent"
              >
                Se connecter
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 xl:hover:bg-transparent xl:border-0 xl:hover:text-orange-700 xl:p-0 dark:text-white xl:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white xl:dark:hover:bg-transparent"
              >
                S'enregistrer
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
