import React from "react";

import Firma from "../img/Firma";

const Home = () => {
  return (
    <div className=" man p-3 text-green-700">
      <div className=" flex flex-col items-center text-center pt-100px">
        <div className="flex flex-col text-3vw <md:text-24px font-bold mb-30px">
          <span className="flex justify-center items-center gap-10px"></span>
          <span className="flex items-center gap-10px">
            <Firma />
          </span>
          {/* <h1 className="text-5xl  font-bold mb-4">Management</h1> */}
        </div>

        <span className="mb-30px w-1/4 <lg:w-1/3 <md:w-1/2 text-14px leading-tight">
          "Willkommen in einer Welt voller Möglichkeiten und Abenteuer.
          Gemeinsam schreiben wir die Zukunft neu und erschaffen das Unmögliche.
          Sei bereit, Grenzen zu überwinden und Träume zu leben. Die Zukunft
          liegt in unseren Händen - lass sie uns gestalten!"
        </span>
      </div>
    </div>
  );
};

export default Home;
