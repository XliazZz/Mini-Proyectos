import react from "../assets/skills/react.svg";
import redux from "../assets/skills/redux.svg";
import express from "../assets/skills/express.svg";
import mongodb from "../assets/skills/mongo.svg";
import postgresql from "../assets/skills/postgresql.svg";
import nodejs from "../assets/skills/node.svg";
import javascript from "../assets/skills/javascript.svg";
import html5 from "../assets/skills/html.svg";
import css3 from "../assets/skills/css.svg";
import git from "../assets/skills/git.svg";
import github from "../assets/skills/github.svg";
import bootstrap from "../assets/skills/bootstrap.svg";
import tailwind from "../assets/skills/tailwind.svg";
import jwt from "../assets/skills/jwt.svg";
import restapi from "../assets/skills/restapi.svg";
import oauth from "../assets/skills/oauth.svg";
import aws from "../assets/skills/aws-rds.svg";
import { motion } from "framer-motion";

const Skills = ({ hasScrolled }) => {
  const skills = {
    JavaScript: javascript,
    NodeJS: nodejs,
    React: react,
    Express: express,
    MongoDB: mongodb,
    PostgreSQL: postgresql,
    Redux: redux,
    JWT: jwt,
    OAuth: oauth,
    Tailwind: tailwind,
    Git: git,
    GitHub: github,
    Bootstrap: bootstrap,
    HTML5: html5,
    CSS3: css3,
    "Amazon RDS": aws
  };

  return (
    <div className="flex justify-center text-center content-center m-10 sm:m-0 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-1 sm:gap-5 uppercase">
        {Object.keys(skills).map((skill, i) => (
          <div key={skill} className="group flex flex-col justify-center items-center bg-indigo-900 bg-opacity-40 shadow-xl gap-2 px-8 sm:px-4 py-5 rounded-lg ring-2 ring-offset-2 ring-offset-blue-800 ring-cyan-700 mt-5 cursor-pointer hover:bg-blue-900 hover:bg-opacity-100 transition">
            <img className="w-9" src={skills[skill]} alt={`Imagen de ${skill}`} />
            <span>{skill}</span>
            <div>
              <i className="fa fa-chevron-right opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 block transition"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
