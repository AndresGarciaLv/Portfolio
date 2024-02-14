import {
  RiCheckboxBlankCircleFill,
  RiPlayFill,
  RiStarFill,
} from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-8">
      {/* Information */}
      <div className="md:col-span-5 flex items-center justify-center p-8 xl:p-7">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl xl:text-4xl font-bold xl:leading-[7.5rem]">
            Junior Developer{" "}
            <span className="text-primary py-2 px-2 border-8 border-primary relative inline-block">
              Andres Garcia Leyva
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -top-5 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -top-5 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -bottom-5 p-2 bg-primary rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -bottom-5 p-2 bg-primary rounded-full box-content" />
            </span>
          </h1>
          <p className="mt-5 mr-5 text-justify text-gray-500 text-xl">
             Soy proactivo en
               resolver problemas y tengo una gran capacidad para trabajar en equipo, adaptándome
                rápidamente a nuevos entornos y tecnologías. Mi enfoque está en mejorar continuamente 
                mis habilidades técnicas a través de la práctica y el aprendizaje constante, con el objetivo 
                de contribuir efectivamente a proyectos de desarrollo de software.</p>
          <p className="mt-5 text-gray-500 text-2xl leading-[2.5rem]">
           email: andresgarciia09@gmail.com
          </p>
          
            <Link to="https://github.com/AndresGarciaLv" >
          <FaGithub className="mt-5 w-12 h-12 hover:bg-secondary" />
          </Link>
          
          {/* <div className="flex flex-col md:flex-row items-center gap-4">
            <button className="w-full xl:w-auto bg-primary text-white py-2 px-8 rounded-xl text-xl">
              Contact Us
            </button>
            <button className="w-full xl:w-auto flex items-center justify-start text-left gap-4 py-2 px-8 rounded-xl text-xl">
              <RiPlayFill className="bg-secondary text-primary p-4 rounded-full box-content" />{" "}
              Watch our <br /> introduction video
            </button>
          </div> */}
        </div>
      </div>
      {/* Image */}
      <div className="md:col-span-3 flex items-start justify-start relative">
    
        {/* Circle */}
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[280px] h-[280px] md:w-[280px] md:h-[280px] bg-white border-[10px] border-primary rounded-full -z-10">
        <img
            src="foto.jpg"
            className=" border-10 border-primary border w-[350px] h-[260px] md:w-[260px] md:h-[260px] object-cover xl:-mt-18 rounded-full"
          />
        </div>

        {/* Logos */}
        <img
          src="ilustrator.png"
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-8 border-gray-600 absolute bottom-[10%] xl:top-[15%] left-[20%] xl:left-[15%]"
        />
        <img
          src="figma.png"
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-8 border-gray-600 absolute top-[15%] right-[20%] xl:right-[15%]"
        />
        
         <img
          src="zustand.png"
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-8 border-gray-600 absolute top-[8%] left-[43%] xl:right-[10%]"
        />
        {/* MIDDLE */}
        <img
          src="node.png"
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-8 border-gray-600 absolute top-[35%] right-[20%] xl:right-[2%]"
        />
        <img
          src="tailwind.png"
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-8 border-gray-600 absolute bottom-[18%] xl:top-[35%] left-[5%] xl:left-[2%]"
        />

        <img
          src="react.png"
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-8 border-gray-600 absolute bottom-[30%] left-[15%] xl:left-[4%] -rotate-12"
        />
        <img
          src="photoshop.png"
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-8 border-gray-600 absolute bottom-[13%] left-[10%] xl:left-[15%] -rotate-12"
        />
        <img
          src="nest.png"
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-8 border-gray-600 absolute bottom-[8%] left-[43%] xl:right-[40%]"
        />

         <img
          src="git.jpg"
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-8 border-gray-600 absolute bottom-[30%] right-[15%] xl:right-[4%]"
        />
         <img
          src="js.png"
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-8 border-gray-600 absolute bottom-[13%] right-[40%] xl:right-[15%]"
        />
  
      </div>
    </section>
  );
};

export default Hero;
