import React from "react";
import api from "../../../assets/api.jpg";

const HomeHero = () => {
  return (
    <section className="container mx-auto mt-50 px-4">
      <div className="grid md:grid-cols-2 items-center gap-10">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
            Fake API Informations
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae earum
            illum vitae sed consequatur ducimus labore expedita minus voluptates
            error odit atque in magnam assumenda, ratione possimus cum obcaecati
            voluptas facilis natus soluta iste dignissimos repellat praesentium!
            Voluptatem numquam voluptas mollitia sed? Optio, id nihil amet
            voluptatum modi ex fuga?
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src={api}
            alt="API Illustration"
            className="w-full rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
