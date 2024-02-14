import React from "react";

const Works = () => {
  return (
    <div id="aboutUs" className="p-8 xl:p-20">
      <div className="mb-8">
        <h1 className="text-[40px] font-black">
          Projects
        </h1>
        <p className="text-xl text-gray-500">
         Proyectos que he realizado a lo largo de 2 años de experiencia en el area del Desarrollo Web.
        </p>
      </div>
      {/* Works */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <img
            src="work1.png"
            className="w-full h-[400px] object-cover rounded-3xl"
          />
          <p className="text-gray-500">Niux Project - September-December, 2023</p>
          <h3 className="text-2xl font-bold">Niux Devs - Proyecto Colaborativo</h3>
          <p className="text-gray-500">
            Se realizó el desarrollo de una aplicación web "Niux", la cual tenía como objetivos la venta de productos de tecnología y brindar la prestación de servicios computacionales. 
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <img
              src="work2.png"
              className="w-full h-56 object-cover rounded-3xl"
            />
            <p className="text-gray-500">Niux Project - September-December, 2023</p>
            <h3 className="text-2xl font-bold">
              Dashboard administrativo
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="work3.png"
              className="w-full h-56 object-cover rounded-3xl"
            />
            <p className="text-gray-500">GymApp - November, 2023</p>
            <h3 className="text-2xl font-bold">
              GymApp - Aplicacion web para dietas alimenticias.
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="work4.png"
              className="w-full h-56 object-cover rounded-3xl"
            />
            <p className="text-gray-500">Artesanos Web - May-July, 2023</p>
            <h3 className="text-2xl font-bold">
             E-commerce Productos de Artesanias
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="work5.png"
              className="w-full h-56 object-cover rounded-3xl"
            />
            <p className="text-gray-500">ProjectSync - Jan-Feb , 2024</p>
            <h3 className="text-2xl font-bold">
              Sistema de Gestion Empresariales
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
