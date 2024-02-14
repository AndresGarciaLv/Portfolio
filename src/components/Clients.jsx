import React from "react";
import { SiNestjs, SiTailwindcss, SiHtml5, SiCss3, SiAdobeillustrator, SiJavascript, SiAdobephotoshop, SiReact, SiVite, SiPostgresql, SiExpress, SiTypescript, SiDocker, SiMysql, SiApachecassandra } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { VscJson } from "react-icons/vsc";
import { IoLogoFigma } from "react-icons/io5";

const Clients = () => {
  return (
    <div id="tech" className="bg-gray-100 p-8 flex flex-col items-center justify-center gap-8 mt-20 xl:mt-0">
      <h1 className="text-5xl font-medium text-gray-800 text-center mt-5 m-5">
        Mis tecnologías
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-20">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Diseño:</h2>
          <ul className="list-disc list-inside">
            <li className="flex m-2 text-xl font-semibold text-purple-700  "><IoLogoFigma className="mr-2 w-[30px] h-[30px]"/>Figma</li>
            <li className="flex m-2 text-xl font-semibold text-yellow-900  "><SiAdobeillustrator className="mr-2 w-[30px] h-[30px]"/>Illustrator</li>
            <li className="flex m-2 text-xl font-semibold text-blue-700  "><SiAdobephotoshop className="mr-2 w-[30px] h-[30px]"/>Photoshop</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Frontend:</h2>
          <ul className="list-disc list-inside">
            <li className="flex m-2 text-xl font-semibold text-orange-500"><SiHtml5 className="mr-2 w-[30px] h-[30px]" />HTML</li>
            <li className="flex m-2 text-xl font-semibold text-blue-500 "><SiCss3 className="mr-2 w-[30px] h-[30px]" />CSS</li>
            <li className="flex m-2 text-xl font-semibold text-yellow-500 "><SiJavascript className="mr-2 w-[30px] h-[30px]"/>JavaScript</li>
            <li className="flex m-2 text-xl font-semibold text-blue-400 "><SiReact className="mr-2 w-[30px] h-[30px]" />React</li>
            <li className="flex m-2 text-xl font-semibold text-purple-400 "><SiVite className="mr-2 w-[30px] h-[30px]" />Vite</li>
            <li className="flex m-2 text-xl font-semibold text-blue-500  "><SiTailwindcss  className="mr-2 w-[30px] h-[30px]"/>Tailwind CSS</li>
            <li className="flex m-2 text-xl font-semibold text-gray-400  "><SiReact className="mr-2 w-[30px] h-[30px]" />Axios</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Backend:</h2>
          <ul className="list-disc list-inside">
            <li className="flex m-2 text-xl font-semibold text-green-500  "><IoLogoNodejs className="mr-2 w-[30px] h-[30px]" />Node.js</li>
            <li className="flex m-2 text-xl font-semibold text-green-700"><SiExpress className="mr-2 w-[30px] h-[30px]" />Express</li>
            <li className="flex m-2 text-xl font-semibold text-red-700"><SiNestjs className="mr-2 w-[30px] h-[30px]"/>NestJS</li>
            <li className="flex m-2 text-xl font-semibold text-blue-500  "><SiDocker className="mr-2 w-[30px] h-[30px]"/>Docker</li>
            <li className="flex m-2 text-xl font-semibold text-orange-500  "><VscJson className="mr-2 w-[30px] h-[30px]"/>TypeORM</li>
            <li className="flex m-2 text-xl font-semibold text-blue-500  "><SiTypescript className="mr-2 w-[30px] h-[30px]" />TypeScript</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Bases de datos:</h2>
          <ul className="list-disc list-inside">
            <li className="flex m-2 text-xl font-semibold text-yellow-700  "><SiMysql className="mr-2 w-[30px] h-[30px]"/>MySQL</li>
            <li className="flex m-2 text-xl font-semibold text-blue-900  "><SiApachecassandra className="mr-2 w-[30px] h-[30px]"/>Cassandra</li>
            <li className="flex m-2 text-xl font-semibold text-blue-700  "><SiPostgresql className="mr-2 w-[30px] h-[30px]"/>PostgreSQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Clients;
